// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementArray = [];
  var body = document.body;
  var getElementsRecurse = function(node) {
    if ( node.classList && node.classList.contains(className) ) {
      elementArray.push(node);
    };
    node.childNodes.forEach(function(element) {
      getElementsRecurse(element);
    });
    // for (var i = 0; i < node.childNodes.length; i++) {
    //   getElementsRecurse(childNodes[i]);
    // }
  }
  // //if currentNode has no children
  //   //
  

  // //forEach node in array (starting at body)
  // var getElementsRecurse = function(currentNode) {
  //   currentNode.childNodes.forEach(function(element) {
  //   if (element.classList.contains(className)) {
  //     elementArray.push(element);
  //   }

  //   //if(classList)
  //   if (element.childNodes.length != 0)
  //     //recursively call getElements
  //   });
  // };




  getElementsRecurse(body);
  return elementArray;
};
