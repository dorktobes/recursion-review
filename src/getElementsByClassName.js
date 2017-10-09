// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  // your code here
  // input : class name quering for
  // output: array DOM objects that match class name

  var results = [];

  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }
  
  var nodes = node.childNodes;
  if (nodes) {
    for (var i = 0; i < nodes.length; i++) {
      results = results.concat(getElementsByClassName(className, nodes[i]));
    }
  }

  return results;

};
