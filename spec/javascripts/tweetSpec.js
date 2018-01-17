describe("a tweet", function() {
  var tweet;

  beforeEach(function() {
    tweet = new Tweet("animelover12", "I love DBZ XD");
  });

  it("has content", function() {
  	expect(tweet.content).toEqual("I love DBZ XD")
  });

  it("has a username");
});
