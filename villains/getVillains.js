const mongoose = require('mongoose');
const db = require('./db');

const getVillains = () => {
  return []; // TODO: should return all villains from DB
};

const getVillainsHandler = async () => ({
  status: 200,
  body: JSON.stringify(await getVillains())
});

module.exports = {
  getVillainsHandler
};