const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

router.route("/:id")
    .get(bookController.findOne)
    .delete(bookController.remove);

module.exports = router;