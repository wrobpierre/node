const {Movie} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  async index (req, res) {
    try {
      let movies = null
      const search = req.query.search
      if (search) {
        movies = await Movie.findAll({
          where: {
            [Op.or]: [
              'title', 'year', 'genre', 'real'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        movies = await Movie.findAll({
          limit: 100
        })
      }
      res.send(movies)
    } catch (err) {
      res.status(500).send({
        error: 'Une erreur est survenue !'
      })
    }
  },
  async post (req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'Une erreur est survenue !'
      })
    }
  },
  async show (req, res) {
    try {
      const movie = await Movie.findById(req.params.movieId)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'Une erreur est survenue !'
      })
    }
  },
  async put (req, res) {
    try {
      const movie = await Movie.update(req.body, {
        where: {
          id: req.params.movieId
        }
      })
      console.log(movie)
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: `Une erreur est survenue pour modifier le film!`
      })
    }
  }
}
