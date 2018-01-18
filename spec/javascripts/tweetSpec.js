describe("a tweet", function() {
  var viableTweet;

  beforeEach(function() {
    viableTweet = new Tweet("animelover12", "I love DBZ XD");
    longTweet = new Tweet("this_frickin_dude", "Allow me to tell you about the wondrous world of Attack on Titan. It tells about a world of soldiers who fight a futile war, a war that is impossible to win, yet they keep on fighting. They fight for survival. It is a great metaphor for the cycle of war, and shows the perspective of folks who are fighting against people whose technology is too advanced for anyone to beat them.")
    twitterTweet = new Tweet("imaguywholovestotweet", "I frick fracking love Twitter")
    spyOn(window, 'alert');
  });

  it("has content", function() {
  	expect(viableTweet.content).toEqual("I love DBZ XD")
  });

  it("has a username", function() {
  	expect(viableTweet.username).toEqual("animelover12")
  });

  it("is less than 140 characters", function() {
    expect(viableTweet.isLessThanOneFortyCharacters()).toBe(true)
  });

  it("alerts if the tweet is too long", function() {
    longTweet.characterLength();
    expect(window.alert).toHaveBeenCalledWith("Tweet must be less than 140 characters")
  })

  it("replaces the word 'Twitter' with 'Tweety'", function() {
    expect(twitterTweet.replaceTwitterWord()).toEqual("i frick fracking love Tweety")
  })
});
