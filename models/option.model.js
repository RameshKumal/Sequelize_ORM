const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{
    const option = sequelize.define('option',{
        // option_id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        //   },
          option_name: {
            type: Sequelize.STRING,
          },
    });
    return option;
}