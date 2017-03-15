<template>
  <div class="favorite-perso">
    <div class="row">
      <p>Votre perso préféré</p>
      <swiper-component @onSlideChange="onSlideChangeChild"></swiper-component>
    </div>
    <div class="row">
      <button @click.prevent="" class="btn waves-effect waves-light green darken-3" name="action">Valider</button>
    </div>
  </div>
</template>

<script>
  import SwiperComponent from '../swiper/SwiperComponent'

  export default {
    name: 'favorite-perso',
    data () {
      return {
        indexSlide: ''
      }
    },
    components: {
      SwiperComponent
    },
    methods: {
      onSlideChangeChild (index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped>

</style>
