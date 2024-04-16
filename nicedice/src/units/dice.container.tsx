import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import DiceUI from './dice.presenter';

export default function DicePage(): JSX.Element {
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [diceValues, setDiceValues] = useState<number[]>([0, 0, 0, 0, 0]);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false); //@ts-ignore
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null); //@ts-ignore
    const diceRefs = useRef<THREE.Mesh[]>([]); //@ts-ignore
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); //@ts-ignore
    const sceneRef = useRef<THREE.Scene | null>(null);

    useEffect(() => {
        const container = document.createElement('div');
        container.id = 'scene-container';
        document.body.appendChild(container);
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 6;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        container.appendChild(renderer.domElement);
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

        const diceCount = 5;
        for (let i = 0; i < diceCount; i++) {
            const dice = new THREE.Mesh(geometry, material);
            dice.position.x = i * 2 - (diceCount - 1);
            scene.add(dice);
            diceRefs.current.push(dice);
        }

        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;

        renderer.render(scene, camera);
        rollDice();

        window.addEventListener('resize', handleWindowResize);

        return () => {
            container.removeChild(renderer.domElement);
            renderer.dispose();
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleWindowResize = () => {
        const camera = cameraRef.current;
        const renderer = rendererRef.current;

        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth / 2, window.innerHeight);
        }
    };

    const rollDice = () => {
        if (isRolling || isButtonDisabled) return;
        setIsRolling(true);
        setIsButtonDisabled(true);
    
        const newDiceValues: number[] = [0, 0, 0, 0, 0];
    
        const duration = 300;
    
        for (let i = 0; i < diceRefs.current.length; i++) {
            const dice = diceRefs.current[i];
            const scene = sceneRef.current;
            const camera = cameraRef.current;
            if (!dice || !scene || !camera) return;
    
            const minRotationX = Math.floor(Math.random() * 20) * (Math.PI / 2);
            const minRotationY = Math.floor(Math.random() * 20) * (Math.PI / 2);
            const minRotationZ = Math.floor(Math.random() * 20) * (Math.PI / 2);
    
            const startRotation = dice.rotation.clone();
            const endRotation = new THREE.Euler(minRotationX, minRotationY, minRotationZ);
    
            const startTime = Date.now();
    
            const animateSingleRoll = () => {
                const now = Date.now();
                const delta = now - startTime;
                const t = Math.min(delta / duration, 1);
    
                dice.rotation.x = THREE.MathUtils.lerp(startRotation.x, endRotation.x, t);
                dice.rotation.y = THREE.MathUtils.lerp(startRotation.y, endRotation.y, t);
                dice.rotation.z = THREE.MathUtils.lerp(startRotation.z, endRotation.z, t);
    
                rendererRef.current?.render(scene, camera);
    
                if (t < 1) {
                    requestAnimationFrame(animateSingleRoll);
                } else {
                    const newValue = showTopFace(dice, camera);
                    newDiceValues.push(newValue);
                    newDiceValues.shift();
    
                    if (i === diceRefs.current.length - 1) {
                        console.log(newDiceValues);
                        setDiceValues(newDiceValues.slice());
                        setIsRolling(false);
                        setIsButtonDisabled(false);
                    }
                }
            };
    
            animateSingleRoll();
        }
    };
    //@ts-ignore
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
        <>
            <DiceUI
                rollDice = {rollDice}
                isButtonDisabled = {isButtonDisabled}
                diceValues = {diceValues}
            />
        </>
    );
}