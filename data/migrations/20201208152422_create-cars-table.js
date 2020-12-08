

exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', table => {
    //id: Primary key, unique, not null
    table.increments();
    //VIN: string, unique, not null 
    table.text('vin', 128).unique().notNullable();
    //Make: String, not null 
    table.text('make', 128).unique().notNullable();
    //Model: String, not null 
    table.text('model', 128).notNullable();
    //mileage: Int, not null
    table.integer('mileage').notNullable();
    //transmission type
    table.text('transmissionType');
    //status of title  
    table.text('titleStatus');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
