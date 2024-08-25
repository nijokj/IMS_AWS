module.exports = {
  HOST: "nijo-db.cbakg20oyeku.ap-south-1.rds.amazonaws.com",
  USER: "nijoadmin",
  PASSWORD: "nijoadmin",
  DB: "invsys",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
