const Router = require("express");

const controller = require("../controller/controller");

const router = Router();

router.get("/:symbol/quotes", controller.getQuote);
router.get("/quotes", controller.getQuotes);

module.exports = router;
