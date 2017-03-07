<template>
  <div class="favorite-perso">
    <div class="row">
      <p>Votre perso préféré</p>
      <swiper-component></swiper-component>
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
    components: {
      SwiperComponent
    }
  }
</script>

<style scoped>

</style>
