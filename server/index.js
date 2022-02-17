const express = require("express");
const debug = require("debug")("server:");
const morgan = require("morgan");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(`Server listening in ${port}`);
  });

  server.on("error", (error) => {
    const message = "error";
    error.code === "EDDADRINUSE" ? `Port ${port} busy` : error.message;
    reject(new Error(`Error on server:`, error.message));
  });
};

app.use(morgan("dev"));

module.exports = initializeServer;
