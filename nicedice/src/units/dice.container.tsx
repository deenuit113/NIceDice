import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function DicePage(): JSX.Element {
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [diceValue, setDiceValue] = useState<number>(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const diceRef = useRef<THREE.Mesh | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);

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

        const startRotation = dice!.rotation.clone();
        const endRotation = new THREE.Euler(minRotationX, minRotationY, minRotationZ);

        const animateRoll = () => {
            const startTime = Date.now();
            const animate = () => {
                const now = Date.now();
                const delta = now - startTime;
                const t = Math.min(delta / duration, 1);

                dice!.rotation.x = THREE.MathUtils.lerp(startRotation.x, endRotation.x, t);
                dice!.rotation.y = THREE.MathUtils.lerp(startRotation.y, endRotation.y, t);
                dice!.rotation.z = THREE.MathUtils.lerp(startRotation.z, endRotation.z, t);

                renderer!.render(scene!, camera!);

                if (t < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setIsRolling(false);
                    setIsButtonDisabled(false);
                    setDiceValue(showTopFace(dice!, camera!));
                }
            };
            animate();
        };

        animateRoll();
    };

    const showTopFace = (dice: THREE.Mesh, camera: THREE.PerspectiveCamera) => {
        const diceFaces = [
            { value: 6, direction: new THREE.Vector3(0, 0, 1), up: new THREE.Vector3(0, 1, 0) },
            { value: 5, direction: new THREE.Vector3(0, 0, -1), up: new THREE.Vector3(0, 1, 0) },
            { value: 1, direction: new THREE.Vector3(-1, 0, 0), up: new THREE.Vector3(0, 1, 0) },
            { value: 2, direction: new THREE.Vector3(1, 0, 0), up: new THREE.Vector3(0, 1, 0) },
            { value: 4, direction: new THREE.Vector3(0, 1, 0), up: new THREE.Vector3(0, 0, 1) },
            { value: 3, direction: new THREE.Vector3(0, -1, 0), up: new THREE.Vector3(0, 0, -1) }
        ];

        let closestFace;
        let minDistance = Infinity;

        for (const face of diceFaces) {
            const normalMatrix = new THREE.Matrix3().getNormalMatrix(dice.matrixWorld);
            const direction = face.direction.clone().applyMatrix3(normalMatrix).normalize();
            const distance = dice.position.distanceTo(camera.position.clone().add(direction));
            if (distance < minDistance) {
                minDistance = distance;
                closestFace = face;
            }
        }

        return closestFace?.value || 0;
    };

    return (
        <div>
            <button onClick={rollDice} disabled={isButtonDisabled}>Roll Dice</button>
            <div>{diceValue}</div>
        </div>
    );
}