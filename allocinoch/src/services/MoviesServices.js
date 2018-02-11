import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('movies', {
      params: {
        search: search
      }
    })
  },
  post (movie) {
    return Api().post('movies', movie)
  },
  show (movieId) {
    return Api().get(`movies/${movieId}`)
  },
  put (movie) {
    return Api().put(`movies/${movie.id}`, movie)
  }
}
