const mongoose = require("mongoose"); // require mongoose

// create a new Schema
const ItemSchema = new mongoose.Schema(
  {
    name: {type: String, required: false},
    description: {type: String, required: false},
    provider: {type: String, required: false},
    likes: {type: Number, required: false },
    quantity: {type: Number, required: false},
    sponsored: {type: Boolean, required: false},
    inStock: {type: Boolean, required: false}
  }
);

// 
const Item = mongoose.model("ItemType", ItemSchema);

//make this exportable to be accessed in `app.js`
module.exports = Item;