<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Film">
        <v-text-field
          label="Nom du film"
          v-model="movie.title"
          required
          :rules="[required]"
        ></v-text-field>

        <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
        id="date"
        required
          :rules="[required]"
          slot="activator"
          label="Picker in menu"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>

        <v-text-field
          label="Réalisateur du film"
          v-model="movie.real"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Genre du film"
          v-model="movie.genre"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Langue du film"
          v-model="movie.language"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Mettez un lien d'image"
          v-model="movie.image"
          required
          :rules="[required]"
        ></v-text-field>
        <span class="danger-alert" v-if="error">
          {{error}}
        </span>
        <v-btn @click="save">Enregistrer</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import MoviesService from '@/services/MoviesServices'
export default {
  data () {
    return {
      date: null,
      dateFormatted: null,
      menu: false,
      movie: {
        title: null,
        year: null,
        real: null,
        genre: null,
        language: null,
        image: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      this.movie.year = document.getElementById('date').value
      const areAllFieldsFilledIn = Object
        .keys(this.movie)
        .every(key => !!this.movie[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Remplissez tout les champs'
        return
      }
      const movieId = this.$store.state.route.params.movieId
      try {
        await MoviesService.put(this.movie)
        this.$router.push({
          name: 'movie',
          params: {
            movieId: movieId
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    formatDate (date) {
      if (!date) {
        return null
      }

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) {
        return null
      }

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  async mounted () {
    try {
      const movieId = this.$store.state.route.params.movieId
      this.movie = (await MoviesService.show(movieId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
