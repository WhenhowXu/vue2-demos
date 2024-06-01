<template>
  <div class="particles-container" />
</template>
<script>
import ParticlesJS from 'particles.js'
console.dir(ParticlesJS, 'ParticlesJS')
export default {
  name: 'Particles',
  mounted() {
    // this.initParticles()
  },
  methods: {
    initParticles() {
      ParticlesJS.load({
        selector: '.particles-container',
        color: '#ffffff',
        sizeVariations: 3,
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              sizeVariations: 2,
              connectParticles: false
            }
          }
        ]
      })
    }
  }
}
</script>
