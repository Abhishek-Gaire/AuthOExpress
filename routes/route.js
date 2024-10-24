const express = require("express");
const { requiresAuth } = require("express-openid-connect");

const pageControllers = require("../controllers/page");

const router = express.Router();

router.get("/", pageControllers.getHomePage);
router.get("/profile", requiresAuth(), pageControllers.getProfile);

module.exports = router;
