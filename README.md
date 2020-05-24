# ![Screenshot of RepoDisplayerJS in action](/media/RepoDisplayerJS.png)

## About RepoDisplayerJS

I realized how silly it was that I was manually updating the "Projects" section of my website, meanwhile I was always updating according to the progress of the repositories I was working on, which are publically displayed on my GitHub profile

I wanted to implement a simple script that can be included in my HTML page which will grab my GitHub profile's public repositories and format important information into a `<div>` of my choosing, so that's what I did. I used [GitHub's REST API v3](https://developer.github.com/v3/) to request the repositories on the client side of the HTML page's visitor

Now my website's "Projects" section automatically updates if I push a new public repository to GitHub, or if I update the description of one of my existing repositories, and more

## Usage

```html
<body onload="repoDisplayer('projects')">

    <div id="projects"></div>

    <!-- Include RepoDisplayerJS -->
    <script src="/src/repoDisplayer.js"></script>

</body>
```

1. Use the `onload` event to execute the `repoDisplayer()` function immediately after your HTML page's `<body>` loads

2. In the function call, include the `id` of the `<div>` you want to write the pulled repositories to, which in my case is `projects`

3. Include the script where the `repoDisplayer()` function lies at the end of your `<body>`, which in my case is `/src/repoDisplayer.js`

```javascript
const profileName = "magarenzo";
const skippedProjects = ["magarenzo.github.io-Blog", "magarenzo.github.io-Old"];
const errorString = "<p>Check out all of my projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on my GitHub profile</p>";
```

1. Update the value of `profileName` to your GitHub username

2. Update the values of `skippedProjects` to any repositories you want to skip, otherwise leave the array empty

3. (Optional) If you are unlike me, and it would be more convenient to specify which repos to *include* rather than *exclude*, then just remove the `!` from `if (!skippedProjects.includes(name)) {` so that it reads `if (skippedProjects.includes(name)) {` instead, and maybe update the variable name to something like `includedProjects` so your code makes more sense

4. Update the value of `errorString` to whatever you want to print to the Div specified by the passed-in ID if we run into an issue with the API or the returned JSON object

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

The values you can expect per each `jsonObject` pulled from the GitHub `profileName` specified in the API request can be seen under [Response](https://developer.github.com/v3/repos/#response) in the docs for [GitHub's REST API v3](https://developer.github.com/v3/)

## Dependency

[GitHub's REST API v3](https://developer.github.com/v3/)

## Owner

Michael A. Agarenzo
