<template>
      <panel title="Movies">
          <v-btn
          slot="action"
          @click="navigateTo({name: 'movies-create'})"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
          </v-btn>
        <div v-for="movie in movies"
        :key="movie.id">
        <movie-metadata :movie="movie" />
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
        </div>
      </panel>
</template>

<script>
import MovieMetadata from '@/components/ViewMovie/MovieMetadata'
import MoviesService from '@/Services/MoviesServices'
export default {
  components: {
    MovieMetadata
  },
  data () {
    return {
      movies: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.movies = (await MoviesService.index(value)).data
      }
    }
  },
  async mounted () {
    this.movies = (await MoviesService.index()).data
  }
}
</script>

<style scoped>
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
