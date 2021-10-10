import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "./node_modules/dat.gui/build/dat.gui.module.js";

let scene, camera, renderer, controls, canvas, cube, cube2, ball, cone, torusKnot;

function updateCamera() {
  camera.updateProjectionMatrix();
}

let createPlane = function () {
  const planeSize = 40;
  const loader = new THREE.TextureLoader();
  const texture = loader.load("checker.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  const repeats = planeSize / 2;
  texture.repeat.set(repeats, repeats);

  const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  const planeMat = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.x = Math.PI * -0.5;
  scene.add(plane);
};

let createCube = function () {
  const cubeSize = 4;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  const cubeMat = new THREE.MeshBasicMaterial({ color: "rgb(52, 235, 76)" });
  cubeMat.flatShading = true;
  cube = new THREE.Mesh(cubeGeo, cubeMat);
  cube.position.set(0, 5, 0);
  scene.add(cube);
};

let createCubewithTexture = function () {
  const cubeSize = 4;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  const cubeMat = new THREE.MeshPhysicalMaterial({
    color: "rgb(84, 227, 232)",
    roughness: 0,
    metalness: 1.0,
    reflectivity: 1.0,
    clearcoat: 1,
  });
  cube2 = new THREE.Mesh(cubeGeo, cubeMat);
  cube2.position.set(-7.5, 5, 7.5);
  scene.add(cube2);
};

let createBall = function () {
  const radius = 3;
  const detail = 3;
  const ballGeo = new THREE.DodecahedronGeometry(radius, detail);
  const ballMat = new THREE.MeshPhongMaterial({
    color: "rgb(235, 46, 21)",
    flatShading: true,
    shininess: 150,
  });
  ball = new THREE.Mesh(ballGeo, ballMat);
  ball.position.set(-7.5, 5, -7.5);
  scene.add(ball);
};

let createCone = function () {
  const radius = 3;
  const height = 5;
  const radialSegments = 10;
  const coneGeo = new THREE.ConeGeometry(radius, height, radialSegments);
  const coneMat = new THREE.MeshLambertMaterial({
    color: "rgb(215, 18, 222)",
  });
  cone = new THREE.Mesh(coneGeo, coneMat);
  cone.position.set(7.5, 5, 7.5);
  scene.add(cone);

  // wireframe
  var geo = new THREE.EdgesGeometry(coneGeo); // or WireframeGeometry
  var mat = new THREE.LineBasicMaterial({ color: "rgb(19, 247, 7)" });
  var wireframe = new THREE.LineSegments(geo, mat);
  cone.add(wireframe);
};

let createTorusKnot = function () {
  const torusGeo = new THREE.TorusKnotGeometry(2, 1, 100, 16);
  const torusMat = new THREE.MeshNormalMaterial();
  torusKnot = new THREE.Mesh(torusGeo, torusMat);
  torusKnot.position.set(7.5, 5, -7.5);
  scene.add(torusKnot);
};

// set up the environment - // initiallize scene, camera, objects and renderer
let init = function () {
  // 1. create the scene
  canvas = document.getElementById("myCanvas");
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // 2. create an locate the camera + add control orbit for move around the camera
  const fov = 45;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  // 3. Create Lighting and GUI for Lighting
  var lightParameters = {
    a: {
      status: true,
      value: 0,
    },
    b: {
      status: false,
      value: 1,
    },
    c: {
      status: false,
      value: 2,
    },
    d: {
      status: false,
      value: 3,
    },
    e: {
      status: false,
      value: 4,
    },
  };

  const gui = new GUI();
  gui.add(camera, "fov", 1, 180).onChange(updateCamera);
  const minMaxGUIHelper = new MinMaxGUIHelper(camera, "near", "far", 0.1);
  gui.add(minMaxGUIHelper, "min", 0.1, 50, 0.1).name("near").onChange(updateCamera);
  gui.add(minMaxGUIHelper, "max", 0.1, 100, 0.1).name("far").onChange(updateCamera);

  const color = 0xffffff;
  const intensity = 1;

  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);

  const light_2 = new THREE.PointLight(color, intensity);
  light_2.position.set(0, 10, 0);

  const light_3 = new THREE.SpotLight(color, intensity);
  light_3.distance = 30;
  light_3.position.set(0, 10, 0);
  light_3.target.position.set(0, 0, 0);

  const light_4 = new THREE.AmbientLight(color, intensity);

  const skyColor = 0xb1e1ff; // light blue
  const groundColor = 0xb97a20; // brownish orange
  const light_5 = new THREE.HemisphereLight(skyColor, groundColor, intensity);

  const arrLight = [light, light_2, light_3, light_4, light_5];
  arrLight.forEach((light) => {
    scene.add(light);
    light.visible = false;
  });
  arrLight[0].visible = true;

  var light1 = gui
    .add(lightParameters.a, "status")
    .name("Directional Light")
    .listen()
    .onChange(function () {
      setChecked("a");
    });
  var light2 = gui
    .add(lightParameters.b, "status")
    .name("Point Light")
    .listen()
    .onChange(function () {
      setChecked("b");
    });
  var light3 = gui
    .add(lightParameters.c, "status")
    .name("Spot Light")
    .listen()
    .onChange(function () {
      setChecked("c");
    });

  var light4 = gui
    .add(lightParameters.d, "status")
    .name("Ambient Light")
    .listen()
    .onChange(function () {
      setChecked("d");
    });

  var light5 = gui
    .add(lightParameters.e, "status")
    .name("Hemisphere Light")
    .listen()
    .onChange(function () {
      setChecked("e");
    });

  function setChecked(prop) {
    for (let param in lightParameters) {
      lightParameters[param].status = false;
      arrLight[lightParameters[param].value].visible = false;
    }
    lightParameters[prop].status = true;
    arrLight[lightParameters[prop].value].visible = true;
  }

  function makeXYZGUI(gui, vector3, name, onChangeFn) {
    const folder = gui.addFolder(name);
    folder.add(vector3, "x", -10, 10).onChange(onChangeFn);
    folder.add(vector3, "y", 0, 10).onChange(onChangeFn);
    folder.add(vector3, "z", -10, 10).onChange(onChangeFn);
    folder.open();
  }

  const directLi = gui.addFolder("Directional Light");
  directLi.addColor(new ColorGUIHelper(light, "color"), "value").name("color");
  directLi.add(light, "intensity", 0, 2, 0.01);
  directLi.add(light.target.position, "x", -10, 10);
  directLi.add(light.target.position, "y", 0, 10);
  directLi.add(light.target.position, "z", -10, 10);

  const pointLi = gui.addFolder("Point Light");
  pointLi.addColor(new ColorGUIHelper(light_2, "color"), "value").name("color");
  pointLi.add(light_2, "intensity", 0, 2, 0.01);
  pointLi.add(light_2.position, "x", -10, 10);
  pointLi.add(light_2.position, "y", 0, 10);
  pointLi.add(light_2.position, "z", -10, 10);

  const spotLi = gui.addFolder("Spot Light");
  spotLi.addColor(new ColorGUIHelper(light_3, "color"), "value").name("color");
  spotLi.add(light_3, "intensity", 0, 2, 0.01);
  spotLi.add(light_3, "distance", 0, 40);
  spotLi.add(new DegRadHelper(light_3, "angle"), "value", 0, 90).name("angle");
  spotLi.add(light_3, "penumbra", 0, 1, 0.01);

  const HemisphereLi = gui.addFolder("Hemisphere Light");
  HemisphereLi.addColor(new ColorGUIHelper(light_5, "color"), "value").name("skyColor");
  HemisphereLi.addColor(new ColorGUIHelper(light_5, "groundColor"), "value").name("groundColor");
  HemisphereLi.add(light_5, "intensity", 0, 2, 0.01);

  // 4. Make a Plane and Shapes
  createPlane();
  createCube();
  createBall();
  createCone();
  createTorusKnot();
  createCubewithTexture();

  // 5. Create the Renderer
  renderer.setSize(750, 550);
  document.body.appendChild(renderer.domElement);
};

class ColorGUIHelper {
  constructor(object, prop) {
    this.object = object;
    this.prop = prop;
  }
  get value() {
    return `#${this.object[this.prop].getHexString()}`;
  }
  set value(hexString) {
    this.object[this.prop].set(hexString);
  }
}

class MinMaxGUIHelper {
  constructor(obj, minProp, maxProp, minDif) {
    this.obj = obj;
    this.minProp = minProp;
    this.maxProp = maxProp;
    this.minDif = minDif;
  }
  get min() {
    return this.obj[this.minProp];
  }
  set min(v) {
    this.obj[this.minProp] = v;
    this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
  }
  get max() {
    return this.obj[this.maxProp];
  }
  set max(v) {
    this.obj[this.maxProp] = v;
    this.min = this.min; // this will call the min setter
  }
}

class DegRadHelper {
  constructor(obj, prop) {
    this.obj = obj;
    this.prop = prop;
  }
  get value() {
    return THREE.MathUtils.radToDeg(this.obj[this.prop]);
  }
  set value(v) {
    this.obj[this.prop] = THREE.MathUtils.degToRad(v);
  }
}

// main animation loop - calls 50-60 in a second.
let speed = 0.01;
let mainLoop = function () {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  ball.rotation.x += 0.01;
  ball.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}; ///////////////////////////////////////////////
init();
mainLoop();
