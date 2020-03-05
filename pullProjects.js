const githubScraper = require("github-scraper");
const fs = require("fs");

var url = "magarenzo?tab=repositories"
githubScraper(url, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile("data.json", JSON.stringify(data));
    }
})