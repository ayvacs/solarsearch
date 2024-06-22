import * as THREE from "three";


export type ThreeScene = {
    camera:     THREE.PerspectiveCamera;
    scene:      THREE.Scene;
    renderer:   THREE.WebGLRenderer;
}