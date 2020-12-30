const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var items=[];
app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  var currentday = today.toLocaleDateString("en-US",options);
  res.render("index", {kindofday:currentday, listItems:items});

})
app.post("/",function(req,res){
  items.push(req.body.todo);
  res.redirect("/");
})








app.listen(3000, function() {
  console.log("Server started on port 3000")
});
