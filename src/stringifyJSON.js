// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var returnStr = '';
  
  if (typeof obj !== 'object' || obj === null) {
    if (typeof obj === 'string') {
      returnStr = '"' + '' + obj + '"';
    } else {
      returnStr = '' + obj;
    }
  } else if (Array.isArray(obj)) {

    returnStr += '[';

    obj.forEach(function(elem, i) { 
      if (i === obj.length - 1 || obj.length === 1) {
        returnStr += stringifyJSON(elem);
      } else {
        returnStr = returnStr + stringifyJSON(elem) + ',';
      }
    });

    returnStr += ']';

  } else {
    returnStr += '{';
    if (Object.keys(obj).length > 0) {
      for (var prop in obj) {

        if (typeof obj[prop] !== 'function' && obj[prop] !== undefined) {
          returnStr = returnStr + '"' + prop + '"' + ':' + stringifyJSON(obj[prop]) + ',';
        }

      }
      if (returnStr[returnStr.length - 1] === ',') {
        returnStr = returnStr.slice(0, returnStr.length - 1);
      }
    }
    returnStr += '}';
  }
  
  



  return returnStr;
};
