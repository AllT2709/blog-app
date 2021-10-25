const mongoose = require("mongoose");

const connectMongo = (URI) => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connection to monggo");
    })
    .catch((err) => {
      console.log("Error to connect to mongo");
    });
};

module.exports = { connectMongo };
