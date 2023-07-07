import thoughts from "thoughts";
var thoughtOfTheDay = thoughts.random();
// console.log(thoughtOfTheDay);

import express from "express";
const app = express();

app.get("/", function(request, response){     //route to the home page
    response.send(thoughtOfTheDay);
  });
  
app.listen(3000, function(){
    console.log("Server started on port 3000");
});



