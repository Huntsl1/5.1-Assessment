const express = require('express');
var loremIpsum = require('lorem-ipsum')

const app = express();

var output = loremIpsum({
  count: 3,
  units: 'paragraphs',
  sentenceLowerBound: 8,
  sentenceUpperBound: 10,
  paragraphLowerBound: 10,
  paragraphUpperBound: 15,
  format: 'html',
});

//app.use('/lorem',express.static("public"));

app.get('/lorem', function(req, res){
  res.send(output);
  //console.log(loremIpsum);

});


app.listen(3002, function(){
  console.log("listening.");
});
