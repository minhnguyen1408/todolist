exports.getDateee = function(){
  var today = new Date();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  var currentday = today.toLocaleDateString("en-US",options);
return currentday;
}
