module.exports = (sequelize, Sequelize) =>{
    const consumer = sequelize.define("consumer", {
        index : {
            type : Sequelize.INTEGER
        },
        FirstName : {
            type : Sequelize.STRING,
        },
        LastName : {
            type : Sequelize.STRING
        },
        Gender : {
            type : Sequelize.STRING
        },
        Country : {
            type : Sequelize.STRING
        },
        Age : {
            type : Sequelize.INTEGER
        }
        
    })
    // console.log("in model");
    return consumer;
}