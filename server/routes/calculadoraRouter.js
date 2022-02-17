require("dotenv").config();
const express = require("express");
const debug = require("debug")("server:suma");

const router = express.Router();

const routerSuma = () => {
  router.get("/suma", (req, res, next) => {
    debug(req.url);
    debug("asking for suma");
    res.json({ suma: "3+6=9" });
  });
};

module.exports = routerSuma;
