require("dotenv").config();
const express = require("express");
const app = express();
const debug = require("debug")("server:root");
const initializeServer = require("./server/index");
const morgan = require("morgan");

app.use(express.json());

const port = process.env.SERVER_PORT || 4000;

(async () => {
  try {
    await initializeServer(port);
  } catch (error) {
    debug(error.message);
  }
})();
