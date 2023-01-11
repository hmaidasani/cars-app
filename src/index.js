const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/routes");

const app = express();

// Settings
app.set("port", process.env.PORT || 8000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);

// Creating the `GET` route
app.get("/", (req, res) => {
  res.send("<h2>Welcome Friends</h2>");
});

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

//Starting the express server
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

module.exports = app;