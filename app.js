const express = require('express');

const app = express();

var loremIpsum = require('lorem-ipsum')
var output = loremIpsum({
  count: 3,
  units: 'paragraphs',
});

//app.use('/lorem',express.static("public"));

app.get('/lorem', function(req, res){
  res.send(output);
  console.log(loremIpsum);

});


app.listen(3002, function(){
  console.log("listening.");
});
