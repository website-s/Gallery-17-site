<template>
    <div ref="sceneContainer" style="width: 100%; height: 100vh;"></div>
  </template>
  
  <script>
  import * as THREE from 'three'
  
  export default {
    name: 'ThreeScene',
    mounted() {
      this.initThreeJS()
    },
    methods: {
      initThreeJS() {
        // Créer la scène
        const scene = new THREE.Scene()
  
        // Créer la caméra (fov, aspect ratio, near, far)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
  
        // Créer le renderer et attacher à l'élément DOM
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.sceneContainer.appendChild(renderer.domElement)
  
        // Créer un cube
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
  
        // Fonction pour rendre la scène
        const animate = function () {
          requestAnimationFrame(animate)
  
          // Faire tourner le cube
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
  
          // Rendu de la scène
          renderer.render(scene, camera)
        }
  
        animate()
  
        // Gestion du redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
          const width = window.innerWidth
          const height = window.innerHeight
          renderer.setSize(width, height)
          camera.aspect = width / height
          camera.updateProjectionMatrix()
        })
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optionnel : ajuster la taille du conteneur pour occuper tout l'écran */
  div {
    display: block;
    margin: 0;
    padding: 0;
  }
  </style>