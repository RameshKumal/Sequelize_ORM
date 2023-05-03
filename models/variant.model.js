

module.exports = (sequelize, Sequelize) =>{
    const variant = sequelize.define('variant', {
        // variant_id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        //   },
          variant_name: {
            type: Sequelize.STRING,
          },
    });
    return variant;
}