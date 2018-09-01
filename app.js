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

// // Add books to database
// seedBooks();

// Landing
app.get("/", (req,res) => {
    res.render("landing"); 
});

// Index
app.get("/ilmoitukset", (req,res) => {
    // Get listings from DB
    Listing.find().populate("book").exec((err, listings) => {
        if(err){
            console.log(err)
        } else {
            res.render("listings/index", {listings: listings})
        }
    });
});

// show form
app.get("/ilmoitukset/uusi", (req, res) => {
    // Get all books from database to show in form
    Book.find({}, (err, books) => {
        if(err){
            console.log(err)
        } else {
            res.render("listings/new", {books})
        }
    });
});

// Create
app.post("/ilmoitukset", (req, res) => {
    if(!req.body.book_id || !req.body.price || !req.body.condition || req.body.price < 1){
        return res.send({success: false, error: "Invalid or missing values"})
    }
    const new_listing = {
        book: req.body.book_id,
        price: req.body.price,
        description: req.body.description,
        condition: req.body.condition,
        creation_date: new Date()
    };
    Listing.create(new_listing, (err, createdListing) => {
        if(err){
            console.log(err)
            res.send({success: false, error: err});
        } else {
            res.send({redirect: "/ilmoitukset", success: true});
            console.log(createdListing);
        }
    });
});

// Show 
app.get("/ilmoitukset/:id", function(req, res){
    //Get listing from DB
    Listing.findById(req.params.id).populate("book").exec(function(err, listing){
        if(err){
            console.log(err)
            res.render("not-found")
        } else {
            res.render("listings/show", {listing});
        }
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});