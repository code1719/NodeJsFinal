const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema( {
    brand: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("items", itemSchema);