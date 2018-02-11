module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.DATE,
    real: DataTypes.STRING,
    genre: DataTypes.STRING,
    language: DataTypes.STRING,
    image: DataTypes.STRING
  })
  return Movie
}
