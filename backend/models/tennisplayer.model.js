module.exports = (sequelize, Sequelize) => {
    const TennisPlayer = sequelize.define("tennisplayer", {
       
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      
      name: {
        type: Sequelize.STRING
      },
      
      titles: {
        type: Sequelize.STRING
      },

      age: {
        type: Sequelize.STRING
      },

      ranking: {
        type: Sequelize.STRING
      }
    });

    return TennisPlayer;
};