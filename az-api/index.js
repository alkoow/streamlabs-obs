/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");

/**
 * colourRoute dependency
 */
const { colorRouter } = require("./entities/color/color.router")



/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

app.use(cors());
app.use(express.json());

/**
 *  Define the api route
 */

app.use("/api", apiRouter);

/**
 *  Define the colour route
 */
apiRouter.use("/color", colorRouter);


/**
 *  Error sent
 */
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

 app.startServer = () => {
  app.listen(3030, () =>
  console.log(`API Server listening on port 3030`)
  );
}


/**
 * No Entrypoint anymore
 */
 module.exports = {
  app,
};
