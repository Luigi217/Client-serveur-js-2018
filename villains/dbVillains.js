const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/testVillains'; // TODO

const db = mongoose.createConnection(mongoDB);

// const {Schema} = mongoose;

const villainsSchema = new mongoose.Schema({
  name: String,
  x: Number,
  y: Number,
  isTargeted: Boolean
});

const dbVillains = db.model('dbVillains', villainsSchema);

module.exports = dbVillains;
