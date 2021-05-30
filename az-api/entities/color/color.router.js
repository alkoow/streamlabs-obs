/**
 * Required External Modules and Interfaces
 */

const express = require("express");

/**
 * FIXME: IMPORT YOUR FUNCTIONS
 */
const { getColor, setColor } = require("./color.service");

/**
 * FIXME: CHANGE THE NAME OF YOUR MODULE
 * Router Definition
 */

const colorRouter = express.Router();

/**
 * TODO: DEFINE YOUR OWN ROUTES
 * Controller Definitions
 */

colorRouter.get("/get", (req, res) => {
  res.send(getColor().toString());
});

colorRouter.get("/set/:id", (req, res) => {
  res.send(setColor(req.params.id));
});

// FIXME: EXPORT THE MODULE BELOW
module.exports = {
  colorRouter,
};
