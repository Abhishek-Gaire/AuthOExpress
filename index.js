const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const { auth } = require("express-openid-connect");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const pageRoute = require("./routes/route");
const config = require("./config");

app.use(pageRoute);
app.use(auth(config));

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
