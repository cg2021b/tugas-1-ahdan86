import * as THREE from "./node_modules/three/src/Three.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

let camera, renderer, canvas, scene;
function main() {
    canvas = document.getElementById("myCanvas");
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvas,
    });
    renderer.shadowMap.enabled = true;

    const fov = 45;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    {
        const planeSize = 100;

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
        mesh.receiveShadow = true;
        mesh.rotation.x = Math.PI * -0.5;
        scene.add(mesh);
    }
    {
        const cubeSize = 4;
        const loader = new THREE.Loader();
        const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
        const cubeMat = new THREE.MeshPhongMaterial({ color: "#8AC" });
        const mesh = new THREE.Mesh(cubeGeo, cubeMat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
        scene.add(mesh);
    }
    {
        const sphereRadius = 3;
        const sphereWidthDivisions = 32;
        const sphereHeightDivisions = 16;
        const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
        const sphereMat = new THREE.MeshPhongMaterial({ color: "#CA8" });
        const mesh = new THREE.Mesh(sphereGeo, sphereMat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
        scene.add(mesh);
    }
    {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.SpotLight(color, intensity);
        light.castShadow = true;
        light.position.set(0, 10, 0);
        light.target.position.set(-4, 0, -4);
        scene.add(light);
        scene.add(light.target);
    }
    {
        const near = 10;
        const far = 100;
        const color = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(color, near, far);
        scene.background = new THREE.Color(color);
    }
    renderer.setSize(750, 550);
    document.body.append(renderer.domElement);
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

main();
animate();
