
exports.seed = function(knex) {
  // replaced .del() w/ .truncate() - which will reset the primary keys as well 
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { vin: '11111111', make: 'Ford', model: 'F-150', mileage: 2500 },
        { vin: '22222222', make: 'VW', model: 'Jetta', mileage: 25000, transmissionType: "Manual" },
        { vin: '33333333', make: 'Ferrari', model: '488', mileage: 127, transmissionType: "Manual-Paddles" }
      ]);
    });
};
