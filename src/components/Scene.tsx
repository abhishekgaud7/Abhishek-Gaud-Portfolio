import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadCachedGLTF } from './utils/gltfCache';

const Scene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 4);

    sceneRef.current = scene;
    cameraRef.current = camera;

    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Disable zoom to keep layout stable
    controlsRef.current = controls;

    let mounted = true;

    loadCachedGLTF('/models/char.glb')
      .then((obj: any) => {
        if (!mounted) return;
        obj.position.set(0, -1, 0); // Lowered slightly to center the character
        scene.add(obj);
      })
      .catch((err: any) => console.error('GLTF load error', err));

    const animate = () => {
      if (!mounted) return;
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        if (controlsRef.current) controlsRef.current.update();
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onResize = () => {
      if (!container) return;
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = container.clientWidth / container.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(container.clientWidth, container.clientHeight, false);
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      mounted = false;
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (controlsRef.current) controlsRef.current.dispose();

      if (sceneRef.current) {
        sceneRef.current.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            const mat = obj.material;
            if (Array.isArray(mat)) mat.forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
            else { if (mat.map) mat.map.dispose(); mat.dispose(); }
          }
        });
      }

      if (rendererRef.current) {
        try {
          rendererRef.current.forceContextLoss();
          rendererRef.current.domElement.parentNode?.removeChild(rendererRef.current.domElement);
          rendererRef.current.dispose();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'grab' }} />;
};

export default Scene;
