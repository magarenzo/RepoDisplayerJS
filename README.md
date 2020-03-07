# projectCarousel.js

Loop through public repositories associated with a GitHub user's profile

---

## Disclaimer / Warning

[GitHub Scraper](https://github.com/nelsonic/github-scraper) (used in this project) is for **education purposes only**. Click [here](https://github.com/nelsonic/github-scraper) to read more about it.

Do not use [GitHub Scraper](https://github.com/nelsonic/github-scraper) or [projectCarousel.js](https://github.com/magarenzo/projectCarousel.js) to claim other's work as your own.

## Setting up

* Run `npm init` to initialize your repo

* Run `npm install github-scraper --save` to save [GitHub Scraper](https://github.com/nelsonic/github-scraper) to your `package.json`

## How it works

*[pullPrjoect.js](https://github.com/magarenzo/projectCarousel.js/blob/master/pullProjects.js)* uses [GitHub Scraper](https://github.com/nelsonic/github-scraper) to get the repos of the GitHub profile you specify in `var url`, and then uses [GitHub Scraper](https://github.com/nelsonic/github-scraper) again to get the data of each repo

* `profileData.pinned` contains repo names of GitHub profile scraped

* `var repo = str.substring(str.lastIndexOf(url + "/"), str.lastIndexOf('"}'));` grabs the repo name which exists in the String between `var url + "/"` (*e.g. magarenzo/*) and `"}`

* `repo.substring(10)` removes the first 10 Characters from `var repo` which represent `var url + "/"` from earlier (*e.g. magarenzo/*)

*[displayProject.js](https://github.com/magarenzo/projectCarousel.js/blob/master/displayProjects.js)* uses the repo data to display project information

## Created with

* [JavaScript](https://www.javascript.com/)

* [npm](https://www.npmjs.com/)

  * [GitHub Scraper](https://github.com/nelsonic/github-scraper)

## Owner

Michael A. Agarenzo
