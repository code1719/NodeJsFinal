const mongodb = require("../db/connect");
// const ObjectId = require("mongoose").objectId;
const { ObjectId } = require("mongodb");

// Get single student
const getSingleItem = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("items")
      .findOne({ _id: itemId });

    if (!result) {
      res.status(404).json({ message: "item not found" });
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

//create student
const createItem = async (req, res) => {
  try {
    const item = {
      brand: req.body.brand,
      weight: req.body.weight,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("items")
      .insertOne(item);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "The person that created this must have fudged up some code. Please try again"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all students
const getAllItems = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("items").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update One Student
const updateItem = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const item = {
      brand: req.body.brand,
      weight: req.body.weight,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("items")
      .replaceOne({ _id: userId }, item);
    if (response.acknowledged) {
      res.status(204).json(response);
      console.log(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some Squirrels Broke while updatiung the student"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("items")
      .deleteOne({ _id: itemId }, true);
    console.log(response);
    if (response.acknowledged) {
      res.status(200).send(response);
      console.log(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Some squirrel quit its job and lost the initiative to delete the student"
        );
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(response);
  }
};

module.exports = {
  getAllItems,
  createItem,
  getSingleItem,
  updateItem,
  deleteItem,
};
