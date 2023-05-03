const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define("product", {
    product_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    consumer_id:{
      type:Sequelize.INTEGER,
      // references:{ 
      //  model: consumer,
      //  key : "Consumer_id"
      // }
    },
    product_name: {
      type: Sequelize.STRING,
      //unique:true, to make this unique
    },
    product_variant:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue:"product undefined"
    }
  },{
    modelName:"Products",
    createdAt: "Created_time",
    updatedAt:false
    //freezeTableName:true to use same name of table mentioned inside the define.
  });
  return product;
};
