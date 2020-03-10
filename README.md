# &#127904; projectCarousel.js

Scrape data and loop through pinned repositories listed on a GitHub user's profile

---

## Disclaimer / Warning

[GitHub Scraper](https://github.com/nelsonic/github-scraper) (used in this project) is for **education purposes only**. Click [here](https://github.com/nelsonic/github-scraper) to read more about it.

Do not use [GitHub Scraper](https://github.com/nelsonic/github-scraper) or [projectCarousel.js](https://github.com/magarenzo/projectCarousel.js) to claim other's work as your own.

## Setting up

* Run `npm init` to initialize your repo

* Run `npm install github-scraper --save` to save [GitHub Scraper](https://github.com/nelsonic/github-scraper) to your `package.json`

* Create `json` and `json/repos` dirs to store data grabbed from *[pullPrjoect.js](https://github.com/magarenzo/projectCarousel.js/blob/master/scripts/pullProjects.js)*  (or edit where data is stored in the script)

## How it works

*[pullPrjoect.js](https://github.com/magarenzo/projectCarousel.js/blob/master/scripts/pullProjects.js)* uses [GitHub Scraper](https://github.com/nelsonic/github-scraper) to get the pinned repos of the GitHub profile you specify in `const profileName`, and then uses [GitHub Scraper](https://github.com/nelsonic/github-scraper) again to get the data of each repo

* `profileData.pinned` contains pinned repo names of GitHub profile scraped

* `var repo = str.substring(str.lastIndexOf(profileName + "/"), str.lastIndexOf('"}'));` grabs the repo name which exists in the String between `const profileName + "/"` (*e.g. magarenzo/*) and `"}`

* `repo.substring(10)` removes the first 10 Characters from `var repo` which represent `const profileName + "/"` from earlier (*e.g. magarenzo/*)

*[template.html](https://github.com/magarenzo/projectCarousel.js/blob/master/scripts/template.html)* provides a template to see how *projectCarousel.js* works

*[projectCarousel.js](https://github.com/magarenzo/projectCarousel.js/blob/master/scripts/projectCarousel.js)* uses the repo data to display project information

## Created with

* [JavaScript](https://www.javascript.com/)

* [npm](https://www.npmjs.com/)

  * [GitHub Scraper](https://github.com/nelsonic/github-scraper)

## Owner

Michael A. Agarenzo
