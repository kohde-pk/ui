var unirest = require("unirest");

var req = unirest("GET", "https://community-hacker-news-v1.p.rapidapi.com/topstories.json");

req.query({
	"print": "pretty"
});

req.headers({
	"x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
	"x-rapidapi-key": "d5f132d0abmshd0942b2863e0e04p110507jsnce35aa5516be"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});