var express = require("express");
var app = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//GET
app.get("/landing",function(req,res){
    console.log("this is kushal");
    res.render("landing");
});

app.get("/home",function(req,res){
    res.render("home.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
})

