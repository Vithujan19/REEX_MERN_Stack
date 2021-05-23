require('dotenv').config();
const mongoose = require("mongoose");

const connectionURL = process.env.MONGO_URL; //link your mongodb url

mongoose
  .connect(connectionURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.log("Could not connect to MongoDB...");
  });
