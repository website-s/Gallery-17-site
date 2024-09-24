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

    gltfloader.load('/pieceentiere/pieceentiere.gltf', (gltf) => {
      scene.add(gltf.scene)
    })

    /**
     * Lights
     */

    // Ambient light for soft global illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Directional light (simulate sunlight)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5)
    sunLight.position.set(5, 10, 5) // Position high up and angled
    sunLight.castShadow = true
    scene.add(sunLight)

    // Sunlight shadow properties
    sunLight.shadow.mapSize.width = 1024
    sunLight.shadow.mapSize.height = 1024
    sunLight.shadow.camera.near = 0.5
    sunLight.shadow.camera.far = 50

    // Optional: Add a helper to visualize the sunlight direction
    const sunLightHelper = new THREE.DirectionalLightHelper(sunLight)
    scene.add(sunLightHelper)

    // GUI controls for sunlight
    const sunLightFolder = gui.addFolder('Sun Light')
    const sunLightPosition = {
      x: sunLight.position.x,
      y: sunLight.position.y,
      z: sunLight.position.z
    }

    sunLightFolder.add(sunLightPosition, 'x').min(-10).max(10).step(0.1).onChange(() => {
      sunLight.position.x = sunLightPosition.x
    })
    sunLightFolder.add(sunLightPosition, 'y').min(-10).max(10).step(0.1).onChange(() => {
      sunLight.position.y = sunLightPosition.y
    })
    sunLightFolder.add(sunLightPosition, 'z').min(-10).max(10).step(0.1).onChange(() => {
      sunLight.position.z = sunLightPosition.z
    })

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

    // Enable physical lights for realism
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
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
