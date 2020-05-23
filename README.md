# RepoDisplayerJS

![Screenshot of RepoDisplayerJS in action](/media/RepoDisplayerJS.png)

## About

I realized how silly it was that I was manually updating the "Projects" section of my website, meanwhile I was always updating according to the progress of the repositories I was working on, which are publically displayed on my GitHub profile.

I wanted to implement a simple script that can be included in my HTML page which will grab my GitHub profile's public repositories and format important information into a `<div>` of my choosing, so that's what I did. I used [GitHub's REST API v3](https://developer.github.com/v3/) to request the repositories on the client side of the HTML page's visitor.

Now my website's "Projects" section automatically updates if I push a new public repository to GitHub, or if I update the description of one of my existing repositories, etc.

## How it works

```html
<body onload="repoDisplayer('projects')">

    <div id="projects"></div>

    <!-- Include RepoDisplayerJS -->
    <script src="/src/repoDisplayer.js"></script>

</body>
```

1. Use the `onload` event to execute the `repoDisplayer()` function immediately after your HTML page's `<body>` loads

2. In the function call, include the `id` of the `<div>` you want to write the pulled repositories to, which in my case is "projects"

3. Include the script where the `repoDisplayer()` function lies at the end of your `<body>`, which in my case is `/repoDisplayer.js`

```javascript
const profileName = "magarenzo";
const skippedProjects = ["magarenzo.github.io-Blog", "magarenzo.github.io-Old"];
```

1. Update the value of `profileName` to your GitHub username

2. Update the values of `skippedProjects` to any repositories you want to skip, otherwise leave the array empty

```javascript
var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
var description = JSON.stringify(jsonObject[key].description).split('"').join("");
var language = JSON.stringify(jsonObject[key].language).split('"').join("");

div.innerHTML += "<h3><a href='" + url + "' target='_blank'>" + name + "</a></h3>";
div.innerHTML += "<p><em>" + description + "</em>. <strong>" + language + "</strong>.</p><br>";
```

1. Capture whichever values you want to use by their keys

2. Alter the HTML according to how you want to display the projects

## Values

Here are the values you can expect per each `jsonObject` pulled from the GitHub `profileName` specified in the API request

```json
archive_url: "{String}"
archived: {Boolean}
assignees_url: "{String}"
blobs_url: "{String}"
branches_url: "{String}"
clone_url: "{String}"
collaborators_url: "{String}"
comments_url: "{String}"
commits_url: "{String}"
compare_url: "{String}"
contents_url: "{String}"
contributors_url: "{String}"
created_at: "{String}"
default_branch: "{String}"
deployments_url: "{String}"
description: "{String}"
disabled: {Boolean}
downloads_url: "{String}"
events_url: "{String}"
fork: {Boolean}
forks: {Number}
forks_count: {Number}
forks_url: "{String}"
full_name: "{String}"
git_commits_url: "{String}"
git_refs_url: "{String}"
git_tags_url: "{String}"
git_url: "{String}"
has_downloads: {Boolean}
has_issues: {Boolean}
has_pages: {Boolean}
has_projects: {Boolean}
has_wiki: {Boolean}
homepage: "{String}"
hooks_url: "{String}"
html_url: "{String}"
id: {Number}
issue_comment_url: "{String}"
issue_events_url: "{String}"
issues_url: "{String}"
keys_url: "{String}"
labels_url: "{String}"
language: "{String}"
languages_url: "{String}"
license: {JSONObject}
merges_url: "{String}"
milestones_url: "{String}"
mirror_url: "{String}"
name: "{String}"
node_id: "{String}"
notifications_url: "{String}"
open_issues: {Number}
open_issues_count: {Number}
owner: {JSONObject}
private: {Boolean}
pulls_url: "{String}"
pushed_at: "{String}"
releases_url: "{String}"
size: {Number}
ssh_url: "{String}"
stargazers_count: {Number}
stargazers_url: "{String}"
statuses_url: "{String}"
subscribers_url: "{String}"
subscription_url: "{String}"
svn_url: "{String}"
tags_url: "{String}"
teams_url: "{String}"
trees_url: "{String}"
updated_at: "{String}"
url: "{String}"
watchers: {Number}
watchers_count: {Number}
```

## Created with

* [GitHub's REST API v3](https://developer.github.com/v3/)

* [JavaScript](https://www.javascript.com/)

## Owner

Michael A. Agarenzo
