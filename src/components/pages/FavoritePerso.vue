<template>
  <div class="favorite-perso">
    <div class="row">
      <p>Votre perso préféré</p>
      <swiper-component @slideChange="setUserTheme"></swiper-component>
    </div>
    <div class="row">
      <button @click.prevent="saveThemeToUserRef(userUid)" class="btn waves-effect waves-light" :class="theme.cssClass" name="action">Valider</button>
    </div>
  </div>
</template>

<script>
  import SwiperComponent from '../swiper/SwiperComponent'
  import firebase from 'firebase'

  export default {
    name: 'favorite-perso',
    data () {
      return {
        indexSlide: 0,
        theme: {
          color: '#0277bd',
          cssClass: 'light-blue darken-3'
        },
        usersRef: firebase.database().ref('users')
      }
    },
    components: {
      SwiperComponent
    },
    computed: {
      userUid () {
        return this.$store.state.currentUser.uid
      }
    },
    methods: {
      setUserTheme (activeIndex) {
        this.indexSlide = activeIndex

        if (this.indexSlide === 0) {
          this.theme.color = '#0277bd'
          this.theme.cssClass = 'light-blue darken-3'
        } else if (this.indexSlide === 1) {
          this.theme.color = '#2e7d32'
          this.theme.cssClass = 'green darken-3'
        } else {
          this.theme.color = '#ff6f00'
          this.theme.cssClass = 'amber darken-4'
        }

        this.$store.dispatch('setUserTheme', this.theme)
      },
      saveThemeToUserRef (userUid) {
        console.log(userUid)
        this.usersRef.child(userUid).update({
          theme: this.theme
        }).then(() => {
          console.log('theme saved in user data')
          this.$router.push('/home')
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
