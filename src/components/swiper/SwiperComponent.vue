<template>
  <div class="swiper-component">
    <swiper :options="swiperOption" ref="choosePerso">
      <swiper-slide><img id="michael" src="../../assets/img/michael.jpg" alt=""></swiper-slide>
      <swiper-slide><img id="franklin" src="../../assets/img/franklin.jpg" alt=""></swiper-slide>
      <swiper-slide><img id="trevor" src="../../assets/img/trevor.jpg" alt=""></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'swiper-component',
    data () {
      return {
        swiperOption: {
          autoplay: false,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          onSlideChangeStart: (swiper) => {
            this.emitActiveIndex(swiper.activeIndex)
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper () {
        return this.$refs.choosePerso.swiper
      }
    },
    methods: {
      emitActiveIndex (activeIndex) {
        this.$emit('slideChange', activeIndex)
      }
    }
  }
</script>

<style scoped>
  img {
    width: 70%;
  }
</style>
