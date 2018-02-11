<template>
  <panel title="Movie">
    <movie-metadata :movie="movie" />
  </panel>
</template>

<script>
import MovieMetadata from './MovieMetadata'
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
  },
  components: {
    MovieMetadata
  }

}
</script>

<style scoped>
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
