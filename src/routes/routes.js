const Router = require("express");

const controller = require("../controller/controller");

const router = Router();

router.get("/:symbol/quotes", controller.getQuote);
router.get("/quotes", controller.getQuotes);
router.get("/test", controller.test)

module.exports = router;
