const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override'); 

const app = express();

mongoose.connect("mongodb://localhost/booksharing_app")
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", (req,res) => {
    res.send("Working");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});