require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT,
  },
};

module.exports = config;
console.log(config);
