
exports.seed = function(knex) {
  // replaced .del() w/ .truncate() - which will reset the primary keys as well 
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { vin: '11111111', make: 'ford', model: 'F-150', mileage: 2500 },
        { vin: '11111111', make: 'ford', model: 'F-150', mileage: 2500 }
      ]);
    });
};
