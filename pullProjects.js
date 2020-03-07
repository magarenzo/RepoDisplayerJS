const githubScraper = require("github-scraper");
const fs = require("fs");

var url = "magarenzo";
githubScraper(url, function(err, profileData) { // grab profile data of user specified in var url
    if (err) console.log("githubScraper error on profileData: " + err);
    else {
        fs.writeFile("profileData.json", JSON.stringify(profileData, null, 2), err => { // log profile data to a file
            if (err) console.log("writeFile error on profileData.json: " + err)
            else {
                console.log("profileData.json created")
                if (profileData.pinned) { // check if pinned object exists
                    Object.keys(profileData.pinned).forEach(function(key) { // grab values of pinned object
                        var str = JSON.stringify(profileData.pinned[key]);
                        var repo = str.substring(str.lastIndexOf(url + "/"), str.lastIndexOf('"}'));
                        githubScraper(repo, function(err, repoData) {
                            if (err) console.log("githubScraper error on repoData: " + err);
                            else {
                                fs.writeFile(repo + ".json", null, 2), err => {
                                    if (err) console.log("writeFile error on repo.json:" + err);
                                    else {
                                        console.log(repo + ".json created");
                                    }
                                }
                            }
                        });
                    });
                }
            }
        });
    }
});