import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function DicePage() {
    const [isRolling, setIsRolling] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const rendererRef = useRef(null);
    const diceRef = useRef(null);
    const cameraRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 6;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth / 2, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        scene.background = new THREE.Color(0x99ccff);

        const geometry = new THREE.BoxGeometry(1, 1, 1);

        const material = [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/1.png') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/2.png') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/3.png') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/4.png') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/5.png') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/6.png') }),
        ];

        const dice = new THREE.Mesh(geometry, material);
        scene.add(dice);

        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;
        diceRef.current = dice;

        renderer.render(scene, camera);
        rollDice();

        return () => {
            document.body.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    const rollDice = () => {
        if (isRolling || isButtonDisabled) return;
        setIsRolling(true);
        setIsButtonDisabled(true);

        const dice = diceRef.current;
        const renderer = rendererRef.current;
        const camera = cameraRef.current;
        const scene = sceneRef.current;

        const duration = 300;

        const minRotationX = Math.floor(Math.random() * 20) * (Math.PI / 2); // X 축 회전 각도
        const minRotationY = Math.floor(Math.random() * 20) * (Math.PI / 2); // Y 축 회전 각도
        const minRotationZ = Math.floor(Math.random() * 20) * (Math.PI / 2); // Z 축 회전 각도

        const startRotation = dice.rotation.clone();
        const endRotation = new THREE.Euler(minRotationX, minRotationY, minRotationZ);

        const animateRoll = () => {
            const startTime = Date.now();
            const animate = () => {
                const now = Date.now();
                const delta = now - startTime;
                const t = Math.min(delta / duration, 1);

                dice.rotation.x = THREE.MathUtils.lerp(startRotation.x, endRotation.x, t);
                dice.rotation.y = THREE.MathUtils.lerp(startRotation.y, endRotation.y, t);
                dice.rotation.z = THREE.MathUtils.lerp(startRotation.z, endRotation.z, t);

                renderer.render(scene, camera);

                if (t < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setIsRolling(false);
                    setIsButtonDisabled(false);
                    showTopFace(dice, camera);
                }
            };
            animate();
        };

        animateRoll();
    };

    const showTopFace = (dice, camera) => {
        const faces = [
            { direction: new THREE.Vector3(0, 0, 1), up: new THREE.Vector3(0, 1, 0) }, // 1
            { direction: new THREE.Vector3(0, 0, -1), up: new THREE.Vector3(0, 1, 0) }, // 6
            { direction: new THREE.Vector3(-1, 0, 0), up: new THREE.Vector3(0, 1, 0) }, // 2
            { direction: new THREE.Vector3(1, 0, 0), up: new THREE.Vector3(0, 1, 0) }, // 5
            { direction: new THREE.Vector3(0, 1, 0), up: new THREE.Vector3(0, 0, 1) }, // 3
            { direction: new THREE.Vector3(0, -1, 0), up: new THREE.Vector3(0, 0, -1) } // 4
        ];

        for (let face of faces) {
            const normalMatrix = new THREE.Matrix3().getNormalMatrix(dice.matrixWorld);
            const direction = face.direction.clone().applyMatrix3(normalMatrix).normalize();
            const up = face.up.clone().applyMatrix3(normalMatrix).normalize();
            const quaternion = new THREE.Quaternion().setFromUnitVectors(camera.up, up);
            const rotationMatrix = new THREE.Matrix4().makeRotationFromQuaternion(quaternion);
            const position = dice.position.clone().add(direction.clone().multiplyScalar(3));
            camera.position.copy(position);
            camera.up.applyMatrix4(rotationMatrix);
            camera.lookAt(dice.position);
            if (camera.position.z > dice.position.z) {
                break;
            }
        }
    };

    return (
        <div>
            <button onClick={rollDice} disabled={isButtonDisabled}>Roll Dice</button>
        </div>
    );
}