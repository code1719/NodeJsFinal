const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/items", myController.getAllItems);
routes.post("/items/:id", myController.updateItem);
routes.delete("/items/:id", myController.deleteItem);

routes.delete("/items/:id", myController.deleteItem);

routes.use("/items", require("./items"));

module.exports = routes;
