const express = require("express");
const cors = require("cors");
const Router = require("./router/router");
const path = require("path")
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(Router);

app.listen(port, () => {
  console.log("Server listening at port", port);
});
