const router = require("express").Router();
const { seedUp, seedDown } = require("../controllers/migrations");

router.route("/up").post(seedUp);
router.route("/down").post(seedDown);

module.exports = router;
