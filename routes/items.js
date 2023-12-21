const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const ItemController = require("../controllers/index");

router.get("/", ItemController.getAllItems);
router.post("/", ItemController.createItem);
router.get("/:id", ItemController.getSingleItem);
router.put("/:id", ItemController.updateItem);
router.delete("/:id", ItemController.deleteItem);

router.use("/api-docs", swaggerUi.serve);
router.use("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;
