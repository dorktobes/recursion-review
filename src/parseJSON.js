// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.trim();
  var startingChar = json[0];
  var oddCases = { 't': true, 'f': false, 'n': null};
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
  
//case detection: primitives
  if (startingChar === '"') {
    if (json.length === 2) {
      return '';
    }
    return json.substring(1, json.length - 1);
  }
  if (oddCases.hasOwnProperty(startingChar)) {
    return oddCases[startingChar];
  }
  if (numbers.indexOf(startingChar) !== -1) {
    return Number(json);
  }
     
  //case detection: collections

  //if startingChar is {, object case
  if (startingChar === '{') {
    var returnObj = {};
    var lastBreak = 1;
    var exitCharsToPass = 0;
    var currentKey;
    for (let i = 1; i < json.length; i++) {
       //find keys
      if (json[i] === ':' && exitCharsToPass === 0) {
        currentKey = parseJSON(json.substring(lastBreak, i));
        lastBreak = i + 1;
      }
      if (json[i] === '{') {
        exitCharsToPass++;
      }
      if (json[i] === '}' && exitCharsToPass > 0) {
        exitCharsToPass--;  
      }
      if (json[i] === ',' && exitCharsToPass === 0) {
        returnObj[currentKey] = parseJSON(json.substring(lastBreak, i));
        //set key and value
        lastBreak = i + 1;
      }
      if (json[i] === '}' && exitCharsToPass === 0) {
        returnObj[currentKey] = parseJSON(json.substring(lastBreak, i));
        //set key and value
      }
      
    }
    //find keys, and assign values;
      //first key is between { and :;
      //first value is between ':' and either ',' or '}'
      //if lastchar was ',' create new key
      //repeat
    console.log(returnObj);
    return returnObj;
  }

  //if startingChar is [, array case
  var esapes = 0;
    //find the first ]
    //for everything inside
       //parse values between commas


  // your code goes here
  //input = takes a JSON object (string)
  // output: outputs usable code

};
