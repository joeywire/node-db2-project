

exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', table => {
    //id: Primary key, unique, not null
    table.increments();
    //VIN: string, unique, not null 
    table.text('Vin', 128).unique().notNullable();
    //Make: String, not null 
    table.text('Make', 128).unique().notNullable();
    //Model: String, not null 
    table.text('Model', 128).notNullable();
    //mileage: Int, not null
    table.integer('Mileage').notNullable();
    //transmission type
    table.text('TransmissionType');
    //status of title  
    table.text('TitleSatus');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
