var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//temp array until we have a db
var resources = [
    {name: "Salmon Creek", image: "http://via.placeholder.com/350x150"},
    {name: "Home Depot", image: "http://via.placeholder.com/350x150"},
    {name: "Cheesecake Factory", image: "http://via.placeholder.com/350x150"},
    {name: "Salmon Creek", image: "http://via.placeholder.com/350x150"},
    {name: "Home Depot", image: "http://via.placeholder.com/350x150"},
    {name: "Cheesecake Factory", image: "http://via.placeholder.com/350x150"}
]

//route for homepage
app.get("/", function(req, res){
    res.render("landing");
})

//route for resources page
app.get("/resources", function(req, res){ 
    res.render("resources", {resources:resources})
});

app.post("/resources", function(req, res){
    //get data from form and add to resources array 
    var name = req.body.name;
    var image = req.body.image;
    var newResource = {name: name, image: image}
    resources.push(newResource);
    //redirect back to resources page
    res.redirect("/resources")
})

app.get("/resources/new", function(req, res){
    res.render("new.ejs");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("ProjectSideGig server has started")
})