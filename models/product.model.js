const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define("product", {
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    product_name: {
      type: Sequelize.STRING,
    },
  });
  return product;
};
