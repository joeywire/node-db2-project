const db = require('../../data/dbConfig');

module.exports = {
  getAll() {
    return db('car-dealer');
  }
};