import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "./node_modules/dat.gui/build/dat.gui.module.js";

let scene, camera, renderer, canvas, cube;
const size = {
    w: window.innerWidth * 0.8,
    h: window.innerHeight * 0.8,
};
var lanes = [
    [-10, 0, -100],
    [0, 0, -100],
    [10, 0, -100],
];

function createPlane() {
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
}

function createCube() {
    cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    pos = radInt(0, 2);
    cube.position.set(lanes[pos][0], lanes[pos][1], lanes[pos][2]);
}

function main() {
    //Canvas, Scene, Camera, and Renderer
    canvas = document.getElementById("myCanvas");

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf58a42);

    camera = new THREE.PerspectiveCamera(90, size.w / size.h, 0.1, 1000);
    camera.position.set(0, 20, 10);

    camera.rotation.y = 360 * (Math.PI / 180);
    camera.rotation.x = -30 * (Math.PI / 180);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvas,
    });

    // Lighting
    const gui = new GUI();
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);

    gui.addColor(new ColorGUIHelper(light, "color"), "value").name("color");
    gui.add(light, "intensity", 0, 2, 0.01);

    const directPosition = gui.addFolder("Position");
    directPosition.add(light.position, "x", -10, 10);
    directPosition.add(light.position, "y", 0, 10);
    directPosition.add(light.position, "z", -10, 10);
    const directTarget = gui.addFolder("Target Position");
    directTarget.add(light.target.position, "x", -10, 10);
    directTarget.add(light.target.position, "y", 0, 10);
    directTarget.add(light.target.position, "z", -10, 10);
    scene.add(light);

    createPlane();

    renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(renderer.domElement);
}

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

function mainLoop() {
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}

main();
mainLoop();
