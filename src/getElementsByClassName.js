// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var results = [];
  //Push all nodes that match the condition
  var nodeChecker = function(node) {
    
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    if (node.childNodes) {
      node.childNodes.forEach(function(child) {
        nodeChecker(child);
      })
    }
  }
    //Check each node to see if there are any childNodes
      //If the node has a classList equal to className
        //Push to nodes
      //If it doesn't loop over each childNode and run the nodeChecker on it. 
  nodeChecker(document.body);
  return results;
}
