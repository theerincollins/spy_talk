describe('spyLanguage', function(){
  it('downcases all letters in a string', function() {
    expect(spyLanguage("Peter is a Cool-guy!")).to.equal("peterisacoolguy")
  });

  it('removes punctuation from sting', function() {
    expect(spyLanguage("Erin is a Damn-COOL-CHick")).to.equal("erinisadamncoolchick")
  });

});

describe('columns', function(){
  it('calculates the number of columns', function() {
    expect(columns("Erin is a Damn-COOL-CHick")).to.equal(5)
  });
});

describe('rows', function(){
  it("calculates the number of rows", function() {
    expect(rows("Erin is a Damn-COOL-CHick")).to.equal(4)
  });
});

describe('split', function(){
  it("will split the string into multiple string at a calculated length of columns", function(){
    expect(sortLetters("Break this")).to.eql(["bre", "akt", "his"])
  });

  it("will split the string into multiple string at a calculated length of columns", function(){
    expect(sortLetters("Break thiss")).to.eql(["brea", "kthi", "ss"])
  });
});

describe('finalSpy', function(){
  it("will output spy code in sets of five letters", function(){
    expect(finalSpy("Break this")).to.eql(["bahrk", "iets"])
  });
});
