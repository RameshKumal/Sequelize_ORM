

module.exports = (sequelize, Sequelize) =>{
    const value = sequelize.define('value', {
        // value_id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        //   },
          value_name: {
            type: Sequelize.STRING,
          },
    });
    return value;
}