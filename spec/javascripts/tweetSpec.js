describe("a tweet", function() {
  var viableTweet;

  beforeEach(function() {
    viableTweet = new Tweet("animelover12", "I love DBZ XD");
  });

  it("has content", function() {
  	expect(viableTweet.content).toEqual("I love DBZ XD")
  });

  it("has a username", function() {
  	expect(viableTweet.username).toEqual("animelover12")
  });

  it("is less than 140 characters", function() {
    expect(viableTweet.isLessThanOneFortyCharacters()).toBe(true)
  })
});
