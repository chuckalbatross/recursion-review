// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringifiedArr = [];
  var stringifiedObj = [];
  //var outputString = '';
  
    //BASE CASE (number, string, bool)
    if (typeof obj === 'string') {
      return '"' + obj + '"';
    }
    if (typeof obj === 'boolean') {
      return '' + obj;
    }
    if (typeof obj === 'number') {
      return '' + obj;
    }
    
    //null
    if (obj === null || obj === undefined) {
      return '' + null;
    }
    
    if (typeof obj === 'function') {
      return '{}';
    }

    
    //RECURSIVE PART (Object, Array)
    //array
    if (Array.isArray(obj)) {

      if (obj.length === 0) {
        return '[]';
      } else {
        obj.forEach(function(element) {
          stringifiedArr.push(stringifyJSON(element));
        });
        return '[' + stringifiedArr.toString() + ']';
      }

      
      
      
      
    }
    if (typeof obj === 'object') {
      var keys = Object.keys(obj);
      if ( !Object.keys(obj) ) {
        return '{}';
      } else {
        keys.forEach(function(key) {
          if (typeof obj[key] === 'function') {
            return;
          } else if (key === undefined || obj[key] === undefined) {
            return;
          }  
          else if (typeof obj[key] === 'string') {
            stringifiedArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
          } else {
            stringifiedArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
          }
        });
        return '{' + stringifiedArr.toString() + '}';
      }
    }
    
  };



var num = [''];
console.log(stringifyJSON(num));
console.log( JSON.stringify(num));

var obj = {name: function() {}, sex: [3, 'four', {name: 'John'}, undefined]}
console.log('JSON', JSON.stringify(obj))
console.log('ours', stringifyJSON(obj))


var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

for (var k = 0; k < stringifiableObjects.length; k++) {
  console.log('JSON', JSON.stringify(stringifiableObjects[k]));
  console.log('OURS', stringifyJSON(stringifiableObjects[k]));
}



/*
var object = {name: null, age: undefined, sex: 'male'};
var array = ['seva', 1, null, undefined];


console.log(JSON.stringify(object));
console.log(JSON.stringify(array));
console.log(JSON.stringify(undefined));
*/

// var testArr = [8, [[], 3, 4]];
// console.log(JSON.stringify(testArr));
// console.log(stringifyJSON(testArr));











