const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/index");

router.get("/", ItemController.getAllItems);
router.post("/", ItemController.createItem);
router.get("/:id", ItemController.getSingleItem);
router.put("/:id", ItemController.updateItem);
router.delete("/:id", ItemController.deleteItem);

module.exports = router;
