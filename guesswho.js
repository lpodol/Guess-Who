var express = require('express');
var app = express();

app.get('/Rick%20Moranis', function(req,res){
  res.send({correct: "You got it! You are the Gatekeeper to my Keymaster."})
});

app.get('/:other', function(req,res){
  res.send({incorrect: "No. Try again."})
});

app.get('/', function(req,res){
  res.json({ results: {
    profession: "Movie star",
    "known for": ["Getting possessed", "Following directives from a plant", "Wearing a large helmet", "Performing scientific experiments on his children" ],
    nationality: "Canadian",
    gender: "Male",
    "first letter of first name": "R",
    "extra hint": "Are you the Gatekeeper?"
  }
});
});

app.listen(3000);
