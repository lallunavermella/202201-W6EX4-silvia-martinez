require("dotenv").config();
const express = require("express");
const debug = require("debug")("my-express:root");
const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 4000;

(async () => {
  try {
    await initializeServer(port);
  } catch (error) {
    debug(error.message);
  }
})();
