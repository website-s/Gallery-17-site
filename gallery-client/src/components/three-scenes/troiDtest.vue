<template>
  <div ref="sceneContainer" style="width: 100%; height: 100vh;">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import * as dat from 'dat.gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { onBeforeUnmount } from 'vue'

export default {
  mounted() {
    /**
     * Base
     */
    const gui = new dat.GUI()

    // Canvas
    const canvas = this.$el.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    // Draco and GLTF Loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')

    const gltfloader = new GLTFLoader()
    gltfloader.setDRACOLoader(dracoLoader)

    gltfloader.load('/arche/gltf/arche.gltf', (gltf) => {
      scene.add(gltf.scene)
    })

    /**
     * Lights
     */

    // Ambient light for soft global illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    /**
     * Load HDRI (environment map)
     */
    const rgbeLoader = new RGBELoader()
    rgbeLoader.load('/hdr/hdr.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping
      scene.environment = texture // Set the HDRI as environment for reflections
      scene.background = texture  // Optional: Set as the scene background
    })

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(2, 2, 2)
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0.75, 0)
    controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    })

    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1

    gui.add(renderer, 'toneMapping', {
      No: THREE.NoToneMapping,
      Linear: THREE.LinearToneMapping,
      Reihnard: THREE.ReinhardToneMapping,
      Cineon: THREE.CineonToneMapping,
      ACESFilmic : THREE.ACESFilmicToneMapping
    })
    gui.add(renderer, 'toneMappingExposure').min(0).max(10).step(0.001)

    // // Enable physical lights for realism
    // renderer.physicallyCorrectLights = true
    // renderer.shadowMap.enabled = true
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const tick = () => {
      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()

    // Clean up on unmount using Vue 3's lifecycle hook
    onBeforeUnmount(() => {
      gui.destroy()
      renderer.dispose()
      window.removeEventListener('resize', () => {})
    })
  },
}
</script>

<style scoped>
div {
  display: block;
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
