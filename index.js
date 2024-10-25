const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const client = require("./config/db");
// const { auth } = require("express-openid-connect");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const pageRoute = require("./routes/route");
// const config = require("./config/config");

// this "auth" provides /login and /logout route
// app.use(auth(config));

app.use(pageRoute);

client.connect().then(
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  })
);
