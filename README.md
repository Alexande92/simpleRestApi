Test project with Express.js/PostgreSQL
---------------

Notes
---------------

Implemented

- Migrations. To run them just use the next command
  `sequelize-cli db:migrate`. To revert migration `sequelize-cli db:migrate:undo`

- Example of the config file located in config.example.json.

- Three endpoints for route /user (POST, GET, PUT). POST, PUT Route accepts data in JSON format  

- Sequelize model of User entity for ORM manipulation with data

- Redis integration for caching user. Was run with default config: localhost, port 6379
