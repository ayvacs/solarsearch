import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import type { ThreeScene } from "./types.js";


export function buildScene(): ThreeScene {
    // set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,                                         // FOV
        window.innerWidth / window.innerHeight,     // aspect ratio
        0.1, 1000                                   // near/far clipping plane
    );

    // create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    // enable orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(0, 20, 100);
    controls.update();

    // add renderer element to body
    document.body.appendChild(renderer.domElement);

    // refresh every time the page is refreshed (usually 60 times per second, or 60fps)
    function animate() {
        requestAnimationFrame( animate );
        // you can do custom animations here
        renderer.render( scene, camera );
    }
    animate();

    return {
        scene:      scene,
        camera:     camera,
        renderer:   renderer
    };
}