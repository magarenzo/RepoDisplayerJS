# projectCarousel.js &#127904;

Scrape data and loop through pinned repositories listed on a GitHub user's profile

---

## Disclaimer / Warning

[GitHub Scraper](https://github.com/nelsonic/github-scraper) (used in this project) is for **education purposes only**. Click [here](https://github.com/nelsonic/github-scraper) to read more about it.

Do not use [GitHub Scraper](https://github.com/nelsonic/github-scraper) or [projectCarousel.js](https://github.com/magarenzo/projectCarousel.js) to claim other's work as your own.

## Setting up

* Run `npm init` to initialize your repo

* Run `npm install github-scraper --save` to save [GitHub Scraper](https://github.com/nelsonic/github-scraper) to your `package.json`

* Create `json` and `json/repos` dirs to store data grabbed from *pullProjects.js*  (or edit where data is stored in *[pullPrjoect.js](https://github.com/magarenzo/projectCarousel.js/blob/master/pullProjects.js)*)

## How it works

*[pullPrjoect.js](https://github.com/magarenzo/projectCarousel.js/blob/master/pullProjects.js)* uses [GitHub Scraper](https://github.com/nelsonic/github-scraper) to get the pinned repos of the GitHub profile you specify in `var profileName`, and then uses [GitHub Scraper](https://github.com/nelsonic/github-scraper) again to get the data of each repo

* `profileData.pinned` contains pinned repo names of GitHub profile scraped

* `var repo = str.substring(str.lastIndexOf(profileName + "/"), str.lastIndexOf('"}'));` grabs the repo name which exists in the String between `var profileName + "/"` (*e.g. magarenzo/*) and `"}`

* `repo.substring(10)` removes the first 10 Characters from `var repo` which represent `var profileName + "/"` from earlier (*e.g. magarenzo/*)

*[template.html](https://github.com/magarenzo/projectCarousel.js/blob/master/template.html)* provides a template to see how *displayProjects.js* works

*[displayProject.js](https://github.com/magarenzo/projectCarousel.js/blob/master/displayProjects.js)* uses the repo data to display project information

## Created with

* [JavaScript](https://www.javascript.com/)

* [npm](https://www.npmjs.com/)

  * [GitHub Scraper](https://github.com/nelsonic/github-scraper)

## Owner

Michael A. Agarenzo
