require("dotenv").config();
const express = require("express");
const debug = require("debug")("server:");
const morgan = require("morgan");
const errors = require("./middlewares/error");
const router = express.Router();

const { routerSuma } = require("./routes/calculadoraRouter");

const app = express();

const initializeServer = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening in http:localhost/${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const message = "error";
      error.code === "EDDADRINUSE" ? `Port ${port} busy` : error.message;
      reject(new Error(`Error on server:`, error.message));
    });
    app.use(morgan("dev"));
    app.get("/suma", (req, res, next) => {
      debug(req.url);
      debug("asking for suma");
      res.json({ suma: "3+6=9" });
    });
  });

module.exports = initializeServer;
