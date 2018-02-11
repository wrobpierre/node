module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'allocinoch',
    user: process.env.DB_USER || 'allocinoch',
    password: process.env.DB_PASS || 'allocinoch',
    options: {
      operatorsAliases: false,
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './allocinoch.sqlite'
    }
  },
  authentification: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
