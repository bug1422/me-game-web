import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const Home3DScene = ({ width, height }) => {
    const containerRef = useRef(null)
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        initTHREEJS()
    }, [])
    function initTHREEJS() {
        let mixer
        const clock = new THREE.Clock();
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(width, height)
        if (!isLoaded && containerRef.current) {
            containerRef.current.appendChild(renderer.domElement)
            setLoaded(true)
        }
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        scene.background = new THREE.Color(0xbfe3dd);
        scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
        camera.position.set(3, 2, 4);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0.5, 0);
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
        const loader = new GLTFLoader()
        loader.setDRACOLoader(dracoLoader)
        const modelURL = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/LittlestTokyo.glb"
        loader.load(
            modelURL,
            (gltf) => {
                const model = gltf.scene
                model.position.set(1, 1, 0)
                model.scale.set(0.01, 0.01, 0.01)
                scene.add(model)

                mixer = new THREE.AnimationMixer(model)
                mixer.clipAction(gltf.animations[0]).play()
                renderer.setAnimationLoop(animate)
            }, undefined, (e) => { console.error(e) }
        )

        function animate() {
            const delta = clock.getDelta()
            mixer.update(delta)
            controls.update()
            renderer.render(scene, camera)

        }

        window.onresize = function () {

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);

        };
    }
    return <div ref={containerRef} />
}

export default Home3DScene