"use strict";
import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";

var camera, scene, canvas, renderer, controls;
var createPlane = function () {
    var planeSize = 40;
    var loader = new THREE.TextureLoader();
    var texture = loader.load("checker.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    var repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);
    var planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    var planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    var plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = Math.PI * -0.5;
    scene.add(plane);
};
// let createCubePlayer = function(){
//     const size = 5;
//     const cubeGeo = new THREE.
// };
var init = function () {
    canvas = document.getElementById("myCanvas");
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvas,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00c5e3);
    var fov = 45;
    var aspect = window.innerWidth / window.innerHeight; // the canvas default
    var near = 0.1;
    var far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(5, 5, 0);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 5;
    controls.maxDistance = 15;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.update();
    var color = 0xffffff;
    var intensity = 1;
    var light = new THREE.AmbientLight(color, intensity);
    scene.add(light);
    createPlane();
    //Load Model
    new GLTFLoader().load("./Soldier.glb", function (gltf) {
        var model = gltf.scene;
        model.traverse(function (object) {
            if (object.isMesh) object.castShadow = true;
        });
        scene.add(model);
    });
    //Key Control
    var keysPressed = {};
    document.addEventListener(
        "keydown",
        function (event) {
            if (event.shiftKey) {
            } else {
                keysPressed[event.key.toLowerCase()] = true;
            }
        },
        false
    );
    document.addEventListener(
        "keyup",
        function (event) {
            keysPressed[event.key.toLowerCase()] = false;
        },
        false
    );
    document.body.appendChild(renderer.domElement);
};
var mainLoop = function () {
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};
init();
mainLoop();
