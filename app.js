var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//temp array until we have a db
var resources = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70c2ff71c22d2524518b7444795ea76e5d004b014439cf1c378a3e5b6_340.jpg"},
    {name: "Home Depot", image: "https://pixabay.com/get/e837b10628f4093ed1584d05fb1d4e97e07ee3d21cac104497f9c07ba6e9bdbb_340.jpg"},
    {name: "Cheesecake Factory", image: "https://pixabay.com/get/e137b10c21f41c22d2524518b7444795ea76e5d004b014439cf1c378a3e5b6_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70c2ff71c22d2524518b7444795ea76e5d004b014439cf1c378a3e5b6_340.jpg"},
    {name: "Home Depot", image: "https://pixabay.com/get/e837b10628f4093ed1584d05fb1d4e97e07ee3d21cac104497f9c07ba6e9bdbb_340.jpg"},
    {name: "Cheesecake Factory", image: "https://pixabay.com/get/e137b10c21f41c22d2524518b7444795ea76e5d004b014439cf1c378a3e5b6_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70c2ff71c22d2524518b7444795ea76e5d004b014439cf1c378a3e5b6_340.jpg"},
    {name: "Home Depot", image: "https://pixabay.com/get/e837b10628f4093ed1584d05fb1d4e97e07ee3d21cac104497f9c07ba6e9bdbb_340.jpg"},
    {name: "Cheesecake Factory", image: "https://pixabay.com/get/e137b10c21f41c22d2524518b7444795ea76e5d004b014439cf1c378a3e5b6_340.jpg"}
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