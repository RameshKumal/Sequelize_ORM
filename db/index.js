const { HOST, USER, PASSWORD, DB, dialect, pool } = require("./db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  logging: false,
  pool: {
    max: pool.max,
    min: pool.min,
    idle: pool.idle,
    acquire: pool.acquire,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

//adding sequelize and Sequelize in db object to use it anywhere.
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("../models/product.model")(sequelize, Sequelize);
// db.consumer = require("../models/consumer.model")(sequelize, Sequelize);
// db.option = require("../models/option.model")(sequelize, Sequelize);
// db.variant = require("../models/variant.model")(sequelize, Sequelize);
// db.value = require("../models/value.model")(sequelize, Sequelize);

// db.product.hasMany(db.variant);
// db.variant.belongsTo(db.product);

// db.variant.hasMany(db.option);
// db.option.belongsTo(db.variant);

// db.option.hasMany(db.value);
// db.value.belongsTo(db.option);

//without syncing the the database table wont create.
db.sequelize.sync({ force: true }).then(() => {
  console.log("re-sync done");
});

module.exports = db;
