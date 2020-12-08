
const db = require('../../data/dbConfig');

module.exports = {
  getAll() {
    return db('car-dealer');
  }, 
  getById(id) {
    return db('car-dealer').where('id', id).first();
  }, 
  create(car) {
    return db('car-dealer').insert(car);
  },
  update(id, changes) {
    return db('car-dealer').where('id', id).update(changes);
  },
  delete(id) {
    return db('car-dealer').where('id', id).del();
  }
};