<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <movies-search-panel />
      <movie-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import MoviesSearchPanel from './MoviesSearchPanel'
import MoviePanel from './MoviesPanel'
import MoviesService from '@/Services/MoviesServices'
export default {
  components: {
    MoviesSearchPanel,
    MoviePanel
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
