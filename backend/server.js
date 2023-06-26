const app = require("./app");

const port = process.env.PORT || 8000;

//Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server for handling exception");
});

//config
if (process.env.NODE_ENV == "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//create server
const server = app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

//unhandeled promisse rejections
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${(err, err.message)}`);
  console.log("shutting down the server for unyhandeled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
