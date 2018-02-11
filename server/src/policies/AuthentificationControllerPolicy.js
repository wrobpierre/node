const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email:':
          res.status(400).send({
            error: `Vous devez remplir la barre d'adresse.`
          })
          break
        case 'password':
          res.status(400).send({
            error: `Le mot de passe ne suit pas certaines règles: 
            <br>
            - Il ne doit contenir que des caractères et des chiffres
            - Il doit au minimu faire 8 caractères et peut aller jusqu'à 32`
          })
          break
        case 'aaa':
          res.status(400).send({
            error: `${{value}}`
          })
          break
        default:
          res.status(400).send({
            error: `Email incorrect.`
          })
      }
    } else {
      next()
    }
  }
}
