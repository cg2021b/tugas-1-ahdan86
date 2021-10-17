import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls } from "./node_modules/three/examples/jsm/controls/PointerLockControls.js";
import { GUI } from "./node_modules/dat.gui/build/dat.gui.module.js";

let camera, renderer, canvas, scene, cube, controls, raycast, mouse;

let currColor = "";
let currObj = {};
const jumlahCube = 20;
let countCube = 0;

const score = document.querySelector("#score");
const playButton = document.querySelector("#play-button");
const overStat = document.querySelector("#gameover");

let countScore = 0;

function updateCamera() {
    camera.updateProjectionMatrix();
}

let rand = function (min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return min + (max - min) * Math.random();
};

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
    plane.rotation.x = Math.PI * -1.5;
    scene.add(plane);
};

let init = function () {
    //Setting threejs scene and renderer
    canvas = document.getElementById("myCanvas");
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvas,
    });

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfabb28);

    //Setting Threejs Camera
    const fov = 45;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

    //Add Control (+Orbit Control)
    // const pointLock = new PointerLockControls(camera, document.body);
    // pointLock.addEventListener("lock", function () {
    //     // menu.style.display = 'none';
    // });
    // pointLock.addEventListener("unlock", function () {
    //     // menubar.style.display = 'block';
    // });
    controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    //Add Lighting and GUI
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

    //Add Plane
    createPlane();

    //Add Random Cube Object
    const colors = [0xfc0b03, 0x3dfc03, 0x03f8fc];
    function createCube() {
        setTimeout(function () {
            const cubeSize = 3;
            const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            const material = new THREE.MeshPhongMaterial({
                    color: colors[Math.floor(Math.random() * colors.length)],
                    flatShading: true,
                    shininess: 150,
                }),
                cube = new THREE.Mesh(geometry, material);

            countCube++;
            if (countCube <= jumlahCube) {
                cube.position.set(rand(-20, 20), 5, rand(-20, 20));
                scene.add(cube);
                createCube();
            }
        }, 500);
    }
    createCube();
    console.log(countCube);

    window.addEventListener("click", setPickPosition);
    window.addEventListener("mouseout", clearPickPosition);
    window.addEventListener("mouseleave", clearPickPosition);

    renderer.setSize(750, 550);
    document.body.append(renderer.domElement);
};

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

//Raycasting
class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera, time) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
            this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject = undefined;
        }

        // cast a ray through the frustum
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.pickedObject = intersectedObjects[0].object;
            // save its color
            this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();

            let objColor = JSON.stringify(this.pickedObject.material.color);
            if (currColor == objColor && currObj !== this.pickedObject) {
                countScore += 1;
                score.textContent = countScore;
                scene.remove(this.pickedObject);
                scene.remove(currObj);
                clearPickPosition();
            } else {
                currColor = objColor;
                currObj = this.pickedObject;
            }
            // set its emissive color to flashing red/yellow
            this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xffff00 : 0xff0000);
        }
    }
}

//Event Listener
function getCanvasRelativePosition(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: ((event.clientX - rect.left) * canvas.width) / rect.width,
        y: ((event.clientY - rect.top) * canvas.height) / rect.height,
    };
}
function setPickPosition(event) {
    const pos = getCanvasRelativePosition(event);
    pickPosition.x = (pos.x / canvas.width) * 2 - 1;
    pickPosition.y = (pos.y / canvas.height) * -2 + 1; // note we flip Y
}

function clearPickPosition() {
    currColor = "";
    currObj = {};
    pickPosition.x = -100000;
    pickPosition.y = -100000;
}

const pickPosition = { x: 0, y: 0 };
const pickHelper = new PickHelper();
clearPickPosition();

let mainLoop = function (time) {
    time *= 0.001;
    pickHelper.pick(pickPosition, scene, camera, time);
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}; ///////////////////////////////////////////////
init();
mainLoop();
