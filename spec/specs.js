describe('spyLanguage', function(){
  it('downcases all letters in a string', function(){
      expect(spyLanguage("Peter is a Cool-guy!")).to.equal("peterisacoolguy")
  });
  it('removes punctuation from sting', function(){
      expect(spyLanguage("Erin is a Damn-COOL-CHick")).to.equal("erinisadamncoolchick")

  });
});
