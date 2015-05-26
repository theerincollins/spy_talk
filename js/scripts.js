

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
