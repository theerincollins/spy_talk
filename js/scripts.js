

var spyLanguage = function(string) {
  return string.toLowerCase().replace(/[^a-z0-9]/g, "");
};

var columns = function(inputString){
  var resultString = inputString.length;
  return Math.ceil(Math.sqrt(resultString));
};

var rows = function(inputString) {
  return Math.ceil(inputString.length/columns(inputString));
};










//   var result-string = inputString.length;
//   var number-of-columns = 5;
//   var number-of-rows = Math.ceil(9);
//
//   return number-of-rows;
//   return Math.floor(Math.sqrt(resultString));
// };
