const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/getdate.js");
const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
let items=[];
let workitems=[];
app.get("/", function(req, res) {
  var currentday = date.getDateee();
  res.render("index", {kindofday:currentday, listItems:items});

})
app.get("/work", function(req,res){
  res.render("index", {kindofday:"Work list", listItems:workitems});
})
app.post("/",function(req,res){
  if (req.body.submit==="Work"){
    workitems.push(req.body.todo);
    res.redirect("/work");
  } else {
    items.push(req.body.todo);
    res.redirect("/");
  }
})




app.listen(3000, function() {
  console.log("Server started on port 3000")
});
