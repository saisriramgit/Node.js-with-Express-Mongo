//@desc     Logs request to console
const logger = (req, res, next) => {
  req.hello = "Hello World";
  console.log("Middleware ran");
  next();
};

module.exports = logger;
