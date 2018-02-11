<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
        <panel title="Connection">
        <v-text-field
          name="input-1"
          label="Entrez votre email !"
          v-model="email"
        ></v-text-field>
        <br>
        <v-flex xs8>
          <v-text-field
          name="input-1"
          label="Entrez votre mot de passe !"
          v-model="password"
          type="password"
        ></v-text-field>
        </v-flex>
        <br>
        <v-btn @click="login">Se connecter</v-btn>
        <div class="error" v-html="error">
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
