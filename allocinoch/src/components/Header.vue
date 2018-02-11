<template>
  <v-toolbar fixed class="cyan">
  <v-toolbar-title class="mr-4">
    <span class="home" @click="navigateTo({name: 'root'})">
      Allocinoch
    </span>
  </v-toolbar-title>
<v-toolbar-items>
  <v-btn flat dark
  @click="navigateTo({name: 'movies'})"
  >
    Film
  </v-btn>

  <v-btn
  v-if="!$store.state.isUserLoggedIn"
  class="white"
  @click="navigateTo({name: 'register'})">
      S'enregistrer
  </v-btn>

  <v-btn
  v-if="!$store.state.isUserLoggedIn"
  class="white"
  @click="navigateTo({name: 'login'})">
    Se connecter
  </v-btn>

  <v-btn
  class="white"
  v-if="$store.state.isUserLoggedIn"
  @click="logout">
    Se déconnecter
  </v-btn>
</v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover{
  color: white;
}
</style>
