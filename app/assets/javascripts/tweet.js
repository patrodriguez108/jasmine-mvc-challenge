var Tweet = function(username, content) {
	this.username = username;
	this.content = content
};

Tweet.protoype.isLessThanOneFortyCharacters = function() {
	return this.content.length < 140
};

Tweet.prototype.characterLength = function() {
	if (this.isLessThanOneFortyCharacters) {
		alert("Tweet must be less than 140 characters")
	}
}