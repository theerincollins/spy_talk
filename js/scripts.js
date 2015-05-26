

var spyLanguage = function(string) {
  return string.toLowerCase().replace(/[^a-z0-9]/g, "");
};

var columns = function(inputString){
  var resultLength = spyLanguage(inputString).length;
  return Math.ceil(Math.sqrt(resultLength));
};

var rows = function(inputString) {
  var resultLength = spyLanguage(inputString).length;
  return Math.ceil(resultLength/columns(inputString));
};

var sortLetters = function(inputString) {
  var returnArray = [];
  var sliceString = spyLanguage(inputString);
  var numberColumns = columns(inputString);
  var length = spyLanguage(inputString).length;
  var numberRows = rows(inputString);

  var first = 0;
  var last = numberColumns

  for (var index = 1 ; index <= numberRows; index++) {
    var n = sliceString.slice(first, last);
    returnArray.push(n);
    first = last;
    last = last + (numberColumns);
  }
  return returnArray;
};


var finalSpy = function(inputString) {
  var firstArray = sortLetters(inputString);
  var array1 = [];
  var lettersArray;
  var finalArray = [];
  var n;
  firstArray.forEach(function(letters) {
    lettersArray = letters.split("");
    array1.push(lettersArray);
  });

  for(var index = 0; index <= array1.length-1; index++)
    array1.forEach(function(letters){
      finalArray.push(letters[index])
    });
debugger;
    return finalArray.join("").slice(0,4);


};

// var splits = sortLetters(inputString);
//

//
// return splits;


// var n = spyLanguage(sliceString.slice(0, numberColumns-1));
// returnArray.push(n);
// sliceString = spyLanguage(inputString).replace(n, "");
