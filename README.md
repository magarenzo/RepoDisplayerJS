# RepoDisplayerJS

Fetch repositories listed on a GitHub user's profile and display them via HTML

## About

I realized how silly it was that I was manually updating the "Projects" section of my website, meanwhile I was always updating according to the progress of the repositories I was working on, which are publically displayed on my GitHub profile

I wanted to implement a simple script that can be included in my HTML page which will grab my GitHub profile's public repositories and format important information into a `<div>` of my choosing. I use [GitHub's REST API v3](https://developer.github.com/v3/) to request the repositories on the client side of the HTML page's visitor

Now my website's "Projects" section automatically updates if I push a new public repository to GitHub, or if I update the description of one of my existing repositories, and more

## Values

The values you can expect per each `jsonObject` pulled from the GitHub `profileName` specified in the API request can be seen under [Response](https://developer.github.com/v3/repos/#response) in the docs for [GitHub's REST API v3](https://developer.github.com/v3/)

## Dependency

[GitHub's REST API v3](https://developer.github.com/v3/)

## Used By

* [magarenzo.com](https://magarenzo.com)

* [SygWave](https://sygwave.github.io)

## Owner

Michael A. Agarenzo
