// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    }, 
    useNullAsDefault: true,
    migrations: {
      //run the db through its incarnations
      //and allow us to time-travel the db back and forth 
      //standalone files run using the command line 
      directory: './data/migrations'
    }, 
    seeds: {
      //we use to populate with mock data 
      // standalone files run using the command line 
      directory: './data/seeds'
    }
  },

  staging: {
    
  },

  production: {
    
  }

};
