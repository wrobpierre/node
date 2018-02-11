<template>
  <panel title="Movie">
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
            
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="movie.image"/>
          </v-flex>
        </v-layout>
        <v-btn
            dark
            class="cyan"
            @click="navigateTo({
              name: 'movie',
              params: {
                movieId: movie.id
              }
            })">
              Voir
            </v-btn>
  </panel>
</template>

<script>
import MoviesService from '@/services/MoviesServices'

export default {
  data () {
    return {
      movie: {}
    }
  },
  async mounted () {
    const movieId = this.$store.state.route.params.movieId
    this.movie = (await MoviesService.show(movieId)).data
  }
}
</script>

<style scoped>
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
