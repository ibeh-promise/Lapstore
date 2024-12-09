const express = require("express");
const cors = require("cors");
const Router = require("./router/router");
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use router
app.use(Router);

app.listen(port, () => {
  console.log("Server listening at port", port);
});
