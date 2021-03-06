var Tweet = function(username, content) {
	this.username = username;
	this.content = content
};

Tweet.prototype.hasAtSymbol = function() {
	return this.username[0] === "@"
};

Tweet.prototype.addAtSymbol = function() {
	var symbol = "@"
	if (!this.hasAtSymbol()) {
		return this.username = symbol.concat(this.username);
	};
};

Tweet.prototype.isLessThanOneFortyCharacters = function() {
	return this.content.length <= 140
};

Tweet.prototype.characterLength = function() {
	if (this.isLessThanOneFortyCharacters) {
		alert("Tweet must be less than 140 characters")
	};
};

Tweet.prototype.containsTwitter = function() {
	return /(twitter)+/g.test(this.content.toLowerCase());
};

Tweet.prototype.replaceTwitterWord = function() {
	if (this.containsTwitter()) {
		return this.content = this.content.toLowerCase().replace(/(twitter)+/g, "Tweety");
	};
};

Tweet.prototype.hasTwitterLink = function() {
	return /(t.co)+/g.test(this.content.toLowerCase());
};

Tweet.prototype.replaceUrl = function() {
	if (this.hasTwitterLink()) {
		return this.content = this.content.toLowerCase().replace(/(t.co)+/g, "Tweety");
	}
};

Tweet.prototype.validateTweet = function() {
	this.addAtSymbol();
	this.characterLength();
	this.replaceTwitterWord();
	this.replaceUrl();
};