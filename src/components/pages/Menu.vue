<template>
  <div class="menu">
    <div class="collection">
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">library_books</i> MISSIONS PRINCIPALES</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">live_help</i> INCONNUS ET DETRAQUES</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">radio</i> HOBBIES</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">email</i> 50 MORCEAUX DE LETTRES</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">group_work</i> 50 PIECES DE VAISSEAUX</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">trending_up</i> 25 SAUTS</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">trending_down</i> 25 VOLS SOUS LE PONT</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">send</i> 8 VOLS SUR LA TRANCHE</p>
      </router-link>
      <router-link to="" class="collection-item link-item">
        <p class="left"><i class="material-icons">repeat</i> 14 EVENEMENTS ALEATOIRES</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: 'MENU'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .collection {
    margin-top: 0 !important;
    border: 1px solid #424242;
  }
  .link-item {
    height: 70px;
    background-color: #212121;
    border-bottom: 1px solid #424242;
  }
  .link-item p {
    color: #ffffff;
  }
  .link-item:not(.active):hover {
    background-color: #2e7d32 !important;
  }
  .material-icons {
    margin-right: 20px;
  }
</style>
