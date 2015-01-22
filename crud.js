var express = require ("express");
var app = express();
var pets = []

// In Sinatra, it would be name = params[:name]
// In Express, it’s var name = req.params[“name”]

app.get('/create/:pet_name/:pet_type', function(req,res){
  pets.push({name: req.params["pet_name"], type: req.params["pet_type"]});
  res.json({"status": "Success!"})
});

app.get('/read/:pet_name', function(req,res){
  var result = -1
  for (var i = 0; i < pets.length; i++){
    if (pets[i]["name"] === req.params["pet_name"]){
      result = i
    }
  }

  if (result !== -1){
    if(pets[result]["name"] === req.params["pet_name"]){
      res.json(pets[result])
    }else{
    res.json({"Status": "No pet by that name."})
    }
  }
});

app.get('/update/:pet_name/:new_pet_name', function(req,res){
  var result = -1
  for (var i = 0; i < pets.length; i++){
    if (pets[i]["name"] == req.params["pet_name"]){
      result = i
    }
    if (result !== -1){
      pets[result]["name"] = req.params["pet_new_name"]
      res.json({"status": "Success! Pet renamed."})
    }else{
      res.json({"Status": "No pet by that name."})
    }
  }
})

app.get('/delete/:pet_name', function(req,res){
  var result = -1
  for (var i = 0; i < pets.length; i++){
    if (pets[i]["name"] == req.params["pet_name"]){
      result = i
    }
    if (result != -1){
      pets.splice(result,1)
      res.json({"Status": "Success! Pet removed."})
    }else{
      res.json({"Status": "No pet by that name."})
    }
  }
})

app.get('/all_pets', function(req,res){
  res.json({"Status": pets})
});


app.listen(3000);
