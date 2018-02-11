<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Enregistrement" >
        <form
          name="allocinoch-form"
          autocomplete="off">
          <v-text-field
            name="input-1"
            label="Entrez votre email !"
            v-model="email"
          ></v-text-field>
          <br>
            <v-text-field
            name="input-1"
            label="Entrez votre mot de passe !"
            type="password"
            v-model="password"
            auto-complete="new-password"
          ></v-text-field>
        </form>
        <br>
        <v-btn @click="register">Enregistrer</v-btn>
        <div class="error" v-html="error" />
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
    async register () {
      try {
        const response = await AuthentificationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dspatch('setToken', response.data.token)
        this.$store.dspatch('setUser', response.data.user)
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
