// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // if (typeof obj === undefined || typeof obj === 'function') {
  //   return '{}';
  // }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var str = '['
      for (var i = 0; i < obj.length; i++) {
        str += stringifyJSON(obj[i]) + ',';
      }
        str = str.slice(0, str.length-1) + ']';
        return str;
    }
  } 
  
  if (typeof obj === 'object') {
      if (obj === null) {
        return 'null';
      }
      if(Object.keys(obj).length === 0) {
        return '{}';
      }
      var resultObj = '{'
        for (var key in obj) {
          if (typeof obj[key] === 'function') {
            return '{}'
          }
            resultObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
          }
            resultObj = resultObj.slice(0, resultObj.length-1) + '}';
            return resultObj;
        } 
  return '' + obj;
};


