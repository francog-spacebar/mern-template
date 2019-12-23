const { log } = require("../config");
const request = require("request");
const config = require("../config/").config;
const api = {};

api.echo = (req, res, next) => {
  res = res.status(200);
  if (req.get("Content-Type")) {
    res = res.type(req.get("Content-Type"));
  }
  res.send(req.body);
};

module.exports = api;
