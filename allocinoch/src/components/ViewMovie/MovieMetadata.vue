<template>
<v-layout>
    <v-flex xs6>
      <div class="movie-title">
        {{movie.title}}
      </div>

      <div class="movie-year">
        {{movie.year}}
      </div>

      <div class="movie-genre">
        {{movie.genre}}
      </div>

      <div class="movie-language">
        {{movie.language}}
      </div>

      <div class="movie-real">
        {{movie.real}}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="navigateTo({
          name: 'movie-edit',
          params: {
            movieId: movie.id
        }
      })">
        Modifier
      </v-btn>
    </v-flex>

    <v-flex xs6>
      <img class="album-image" :src="movie.image"/>
    </v-flex>
</v-layout>
</template>

<script>
export default {
  props: [
    'movie'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
