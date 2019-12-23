"use strict";

const express = require("express");
const router = express.Router();
const api = require("../src/api");

router.post("/echo", api.echo);

module.exports = router;
