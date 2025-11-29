import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { loadCachedGLTF } from './utils/gltfCache';

const Scene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 3);

    sceneRef.current = scene;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    let mounted = true;

    loadCachedGLTF('/models/char.glb')
      .then((obj) => {
        if (!mounted) return;
        obj.position.set(0, 0, 0);
        scene.add(obj);
      })
      .catch((err) => console.error('GLTF load error', err));

    const animate = () => {
      if (!mounted) return;
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
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

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default Scene;
