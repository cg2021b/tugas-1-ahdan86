import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls;

// set up the environment - // initiallize scene, camera, objects and renderer
let init = function () {
  // 1. create the scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xefefef);

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

  // 3. Make a Plane
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
  const mesh = new THREE.Mesh(planeGeo, planeMat);
  mesh.rotation.x = Math.PI * -0.5;
  scene.add(mesh);

  // 4. create the renderer
  var canvReference = document.getElementById("myCanvas");
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvReference,
  });
  renderer.setSize(750, 750);
  document.body.appendChild(renderer.domElement);
};

// main animation loop - calls 50-60 in a second.
let speed = 0.01;
let mainLoop = function () {
  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}; ///////////////////////////////////////////////
init();
mainLoop();
