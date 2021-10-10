import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "./node_modules/dat.gui/build/dat.gui.module.js";

let scene, camera, renderer, controls, canvas, cube, gui;

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
  const cubeMat = new THREE.MeshPhongMaterial({ color: "#8AC" });
  cube = new THREE.Mesh(cubeGeo, cubeMat);
  cube.position.set(0, 5, 0);
  scene.add(cube);
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
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.AmbientLight(color, intensity);
  scene.add(light);

  const gui = new GUI();
  gui.addColor(new ColorGUIHelper(light, "color"), "value").name("color");
  gui.add(light, "intensity", 0, 2, 0.01);

  // 4. Make a Plane and Shapes
  createPlane();
  createCube();

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

// main animation loop - calls 50-60 in a second.
let speed = 0.01;
let mainLoop = function () {
  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}; ///////////////////////////////////////////////
init();
mainLoop();
