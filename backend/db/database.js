const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://it20173968:9wmb2UmJlZWhYjvz@cluster0.vt1wuoi.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("MongoDB connected successfully");
    });
};

module.exports = connectDatabase;
