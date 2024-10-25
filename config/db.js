const { MongoClient, ServerAPIVersion } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

module.exports = client;
