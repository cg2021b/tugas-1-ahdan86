import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { color, GUI } from "./node_modules/dat.gui/build/dat.gui.module.js";

const SCORE = document.querySelector("#score");
const MISS = document.querySelector("#miss");

let scene, camera, renderer, canvas, cube, cubeR, cubeG, cubeB;
let obj = [];
let gameOver = 0,
    score = 0,
    objectMiss = 0;

const size = {
    w: window.innerWidth * 0.8,
    h: window.innerHeight * 0.8,
};

let rand = function (min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.round(min + (max - min) * Math.random());
};

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
    plane.position.set(0, -5, 0);
    scene.add(plane);
}

function createCubeRand() {
    const colors = [0xfc0b03, 0x3dfc03, 0x03f8fc];
    let colorRad = rand(0, 2);
    cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshStandardMaterial({ color: colors[colorRad] }));

    // let pos = rand(0, 2);
    // console.log(colorRad);
    if (colorRad == 0) cube.position.set(-10, 0, -100);
    else if (colorRad == 1) cube.position.set(0, 0, -100);
    else if (colorRad == 2) cube.position.set(10, 0, -100);
    // cube.position.set(lanes[pos][0], lanes[pos][1], lanes[pos][2]);
    return cube;
}

function createCube(color, locationX) {
    const loader = new THREE.TextureLoader();
    const texture = loader.load("texture.png");
    const material = new THREE.MeshPhongMaterial({
        color: color,
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        alphaTest: 0.1,
    });
    cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), material);
    cube.position.set(locationX, 0, 0);
    return cube;
    // scene.add(cube);
}

function randCube() {
    let amt = rand(1, 3);
    for (let i = 0; i < amt; i++) {
        cube = createCubeRand();
        // console.log("Masuk");
        obj.push(cube);
        scene.add(cube);
    }
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
    randCube();
    cubeR = createCube(0xfc0b03, -10);
    cubeG = createCube(0x3dfc03, 0);
    cubeB = createCube(0x03f8fc, 10);
    scene.add(cubeR);
    scene.add(cubeG);
    scene.add(cubeB);

    renderer.setSize(innerWidth, innerHeight);
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);
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

let speed = 0.2;

let aPressed = 0,
    sPressed = 0,
    dPressed = 0;
let onKeyDown = function (e) {
    if (e.keyCode == 65) {
        // cubeR.material.color.setHex(0xffffff);
        aPressed = 1;
        console.log("a");
    } else if (e.keyCode == 83) {
        // s
        sPressed = 1;
        console.log("s");
    } else if (e.keyCode == 68) {
        // d
        dPressed = 1;
        console.log("d");
    } else return;
};

let onKeyUp = function (e) {
    if (e.keyCode == 65) {
        // cubeR.material.color.setHex(0xffffff);
        aPressed = 0;
        console.log("aUp");
    } else if (e.keyCode == 83) {
        // s
        sPressed = 0;
        console.log("sUp");
    } else if (e.keyCode == 68) {
        // d
        dPressed = 0;
        console.log("dUp");
    } else return;
};

function collision(x, y, z) {
    if (x == cubeR.position.x && Math.abs(cubeR.position.z - z) < 3 && aPressed == 1) {
        score += 1;
        SCORE.textContent = score;
        return true;
    } else if (x == cubeG.position.x && Math.abs(cubeG.position.z - z) < 3 && sPressed == 1) {
        score += 1;
        SCORE.textContent = score;
        return true;
    } else if (x == cubeB.position.x && Math.abs(cubeB.position.z - z) < 3 && dPressed == 1) {
        score += 1;
        SCORE.textContent = score;
        return true;
    }
}

function mainLoop() {
    obj.forEach((o, index, object) => {
        let status = collision(o.position.x, o.position.y, o.position.z);

        o.position.z += speed;
        if (o.position.z >= 5 || status) {
            scene.remove(o);
            object.splice(index, 1);
            if (!status) {
                objectMiss += 1;
                MISS.textContent = objectMiss;
            }
        }
    });

    if (obj[obj.length - 1].position.z >= -80) {
        randCube();
    }

    if (objectMiss > 20) gameOver = 1;
    speed += 0.0001;
    if (!gameOver) {
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    } else {
        window.alert("GAME OVER!");
    }
}

main();
mainLoop();
