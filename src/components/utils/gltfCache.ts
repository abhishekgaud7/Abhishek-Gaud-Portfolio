import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const cache = new Map<string, any>();

export async function loadCachedGLTF(url: string) {
  if (cache.has(url)) {
    const cached = cache.get(url);
    // return a clone so consumers can transform independently
    return (cached.scene ? cached.scene.clone() : cached.clone());
  }

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(url);
  cache.set(url, gltf);
  return gltf.scene.clone();
}
