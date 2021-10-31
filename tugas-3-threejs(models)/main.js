import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";

let camera, scene, renderer, controls, canvas, model, hemlight, spotlight;

function init() {
    canvas = document.getElementById("myCanvas");
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(60, 2, 1, 5000);
    camera.position.set(0, 10, 25);
    controls = new OrbitControls(camera, renderer.domElement);

    hemlight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemlight);

    spotlight = new THREE.SpotLight(0xffa95c, 4);
    spotlight.castShadow = true;
    spotlight.shadow.bias = -0.0001;
    spotlight.shadow.mapSize.width = 1024 * 4;
    spotlight.shadow.mapSize.height = 1024 * 4;
    scene.add(spotlight);

    scene.add(new THREE.AxesHelper(500));

    document.body.appendChild(renderer.domElement);

    new GLTFLoader().load("marble_bust_01_8k.gltf", (result) => {
        model = result.scene.children[0];
        model.scale.set(50, 50, 50);
        model.traverse((n) => {
            if (n.isMesh) {
                n.castShadow = true;
                n.receiveShadow = true;
                if (n.material.map) n.material.map.anisotropy = 16;
            }
        });
        scene.add(model);
        animate();
    });
    animate();
}

function animate() {
    renderer.render(scene, camera);
    spotlight.position.set(camera.position.x + 10, camera.position.y + 10, camera.position.z + 10);
    requestAnimationFrame(animate);
}
init();
