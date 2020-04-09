// Update with your config settings.
<<<<<<< HEAD
import DATABASE_URL from "../utils/config";
=======

import DATABASE_URL from "../utils/config";

>>>>>>> 89fcb5c... (chor) updated knex production and staging configs
export = {
  development: {
    client: "postgresql",
    connection: {
      database: "zillow",
      user: "postgres",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
