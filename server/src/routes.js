const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationControllerPolicy = require('./policies/AuthentificationControllerPolicy')

const MoviesController = require('./controllers/MoviesController')

module.exports = (app) => {
  app.post('/register',
    AuthentificationControllerPolicy.register,
    AuthentificationController.register)
  app.post('/login',
    AuthentificationController.login)

  app.get('/movies',
    MoviesController.index)
  app.post('/movies',
    MoviesController.post)
  app.get('/movies/:movieId',
    MoviesController.show)
  app.put('/movies/:movieId',
    MoviesController.put)
}
