module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "sasota",
    DB: "db_tennis_player",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};