require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const itemType = require('./models/itemType');
const { application } = require("express");
const app = express();
const port = 3001;
const path = require('path');

//induces order 
    //use 
    //set
    //engine
    //delete
    //put
    //post
    //get
    //listen
//

// creates a new middle ware function to override
// the req method property with a new value
app.use(methodOverride("_method"));
//app.use(express.static("public")); // serve files from public statically
//app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public')); // Keep?

//parsing incomming requests
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});
//
app.set("view engine", "jsx");
mongoose.set("strictQuery", true);
app.engine("jsx", require("express-react-views").createEngine());

// setting up Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 
mongoose.connection.once("open", () => {
    console.log("connected to Mongo");
});

// root url
app.get("/", (req, res) =>{
    res.send('hello');
});

// Seed route - populate the database for testing
app.get("/itemType/seed", (req, res) => {
  itemType.create(
    [
      {
        name: "grapefruit",
        description: "pink",
        provider: "DerpFruits",
        number: 1,
        sponsored: true,
      },
      {
        name: "grape",
        description: "purple",
        provider: "DerpFruits",
        number: 1,
        sponsored: false,
      },
      {
        name: "avocado",
        description: "green",
        provider: "DerpFruits",
        number: 1,
        sponsored: true,
      },
    ],
    (err, data) => {
      res.redirect("/itemType");
    }
  );
});

// index route 
app.get('/itemType', (req, res) => {
    itemType.find({}, (error, tec) => {
      res.render("Index", {
        items : tec
      });
    });// 
  });

// New - Get a form to create a new record
app.get("/itemType/new", (req, res) => {
  res.render("New");
});
// Delete - Delete this one record
app.delete("/itemType/:id", (req, res) => {
  itemType.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/itemType");
  });
});

// Update - Modifying a record
app.put("/itemType/:id", (req, res) => {
  if (req.body.sponsored === "on") {
    req.body.sponsored = true;
  } else {
    req.body.sponsored = false;
  }
  if (req.params.quantity === "BUY") {
    itemType.findByIdAndUpdate(req.params.quantity, {$inc: {quantity: - 1}}
      (err, item) => {
        res.redirect(`/itemType/${req.params.id}`); // redirecting to the Show page
      });
    }
    else
      itemType.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        res.redirect("/itemType");
      });
});

// Create - send the filled form to db and create a new record
app.post("/itemType", (req, res) => {
  if(req.body.sponsored === "on") {
    //if checked, req.body.sponsored is set to 'on'
    req.body.sponsored = true;
  } else {
    //if not checked, req.body.sponsored  is undefined
    req.body.sponsored = false;
  }
  itemType.create(req.body, (error, createditemType) => {
    res.redirect("/itemType");
  });
});


// Edit - Get the form with the record to update
app.get("/itemType/:id/edit", (req, res) => {
  itemType.findById(req.params.id, (err, founditemType) => {
    //find the itemType
    if (!err) {
      res.render("Edit", {
        itemType: founditemType, //pass in the found itemType so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Show route - Show me a particular record
app.get("/itemType/:indexOfitemTypeArray", function (req, res) {
  itemType.findById(req.params.indexOfitemTypeArray, (err, founditemType) => {
    res.render("Show", {
      itemType: founditemType,
    });
  });
});

// port listener
app.listen(port, () => {
    console.log("listening");
  });