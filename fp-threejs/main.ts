import * as THREE from "three/src/Three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let camera, scene, canvas, renderer, controls;

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

// let createCubePlayer = function(){
//     const size = 5;
//     const cubeGeo = new THREE.
// };

let init = function () {
    canvas = document.getElementById("myCanvas");
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvas,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00c5e3);

    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight; // the canvas default
    const near = 0.1;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(5, 5, 0);

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.minDistance = 5;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();

    const color = 0xffffff;
    const intensity = 1;

    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);

    createPlane();

    //Load Model
    new GLTFLoader().load("./Soldier.glb", function (gltf) {
        const model = gltf.scene;
    });

    //Key Control
    const keysPressed = {};
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.shiftKey) {
            } else {
                (keysPressed as any)[event.key.toLowerCase()] = true;
            }
        },
        false
    );
    document.addEventListener(
        "keyup",
        (event) => {
            (keysPressed as any)[event.key.toLowerCase()] = false;
        },
        false
    );

    document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();
