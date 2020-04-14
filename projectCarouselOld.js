// const profileName = "magarenzo";

document.getElementById("projects").innerHTML = "<p>test</p>";

// const githubScraper = require("github-scraper");
// const profile = "magarenzo";

require(["github-scraper"], function() {
    alert("done");
});

// githubScraper(profile, function(err, profileData) {
//     alert(data);
// });

// require(["github-scraper"], function() {
//     console.log("in require");
//     testFunction();
// });

// function testFunction() {
//     console.log("in testFunction");
// }

// // grab profileData of user specified in profileName
// require(["github-scraper"], function() {

//     githubScraper(profileName, function(err, profileData) {

//         var repo;
//         var repos = [];

//         if (err) throw new Error("githubScraper error on profileData: " + err);
//         else {
//             // if profileData has object we need, grab each repo's name
//             if (profileData.pinned) {
//                 Object.keys(profileData.pinned).forEach(function(key) {
//                     repo = JSON.stringify(profileData.pinned[key]);
//                     repoName = repo.substring(repo.lastIndexOf(profileName + "/"), repo.lastIndexOf('"}'));

//                     // use repoName to get each repo's data
//                     githubScraper(repoName, function(err, repoData) {
//                         if (err) throw new Error("githubScraper error on repoName: " + err);
//                         else {
//                             // store repoData in repos array
//                             repos.push(JSON.stringify(repoData, null, 2));
//                         }
//                     });
//                 });
//             }
//         }
//     })
// });