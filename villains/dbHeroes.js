const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/testHeroes'; // TODO, might be the same db for both heroes and villains

const db = mongoose.createConnection(mongoDB);

// const {Schema} = mongoose;

const heroesSchema = new mongoose.Schema({
  name: String,
  x: Number,
  y: Number,
  target: String
});

const dbHeroes = db.model('dbHeroess', heroesSchema);

module.exports = dbHeroes;
