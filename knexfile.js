module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "miyama",
      password: "harumari1"
    }
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
}