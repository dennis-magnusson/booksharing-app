const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override'); 

const app = express();

const Listing = require("./models/listing");
const Book = require('./models/book')
const seedBooks = require('./seed');

mongoose.connect("mongodb://localhost/booksharing_app")
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

seedBooks();

// Landing
app.get("/", (req,res) => {
    res.render("landing"); 
});

// Index
app.get("/listings", (req,res) => {
    // Get listings from DB
    Listing.find({}, (err, listings) => {
        if(err){
            console.log(err)
        } else {
            res.render("listings/index", {listings: listings})
        }
    });
});

// show form
app.get("/listings/new", (req, res) => {
    // Get all books from database
    Book.find({}, (err, books) => {
        if(err){
            console.log(err)
        } else {
            res.render("listings/new", {books})
        }
    });
});



const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});