/**
 * Fetch repositories listed on a GitHub user's profile and display them via HTML
 * @param {String} id
 **/
function repoDisplayer(id) {
    // Update the value of profileName to your GitHub username
    const profileName = "magarenzo";
    // Update the value of skippedProjects to any repositories you want to skip, otherwise leave the array empty
    const skippedProjects = ["magarenzo.github.io-Blog", "magarenzo.github.io-Old"];
    const blank = "_blank";

    // Update the value of error to whatever you want to print to the Div specified by the passed-in ID if we run into an issue with the API or the returned JSON object
    var error = document.createElement("p");
    error.append("Check out all of my projects ");
    var errorAnchor = document.createElement("a");
    errorAnchor.innerText = "here";
    errorAnchor.href = "https://github.com/" + profileName + "?tab=repositories";
    errorAnchor.target = blank;
    error.append(errorAnchor);
    error.append(" on my GitHub profile");

    // Continue if we captured a Div specified by the passed-in ID
    const div = document.getElementById(id);
    if (div) {
        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

            // If the API's response is anything other than successful, print the error string to the specified Div
            if (response.status != 200) {
                div.append(error);
            }

            return response.json();
        }).then((jsonObject) => {
            for (var key in jsonObject) {
                // Continue if every value we want exists
                if (jsonObject[key].name &&
                    jsonObject[key].html_url &&
                    jsonObject[key].description &&
                    jsonObject[key].language) {

                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");

                    // Continue if we want to include the current project
                    if (!skippedProjects.includes(name)) {
                        // Capture whichever values you want to use by their keys
                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var language = JSON.stringify(jsonObject[key].language).split('"').join("");

                        // Alter the text according to how you want to display the projects
                        var anchor = document.createElement("a");
                        anchor.innerText = name;
                        anchor.href = url;
                        anchor.target = blank;
                        var header = document.createElement("h3");
                        header.append(anchor);
                        div.append(header);
                        var paragraph = document.createElement("p");
                        paragraph.innerText = description + ". " + language + ".";
                    }
                }
            }
            // If an error is thrown working with the JSON object, catch it and print the error string to the specified Div
        }).catch(function() {
            div.innerHTML += error;
        });
    }
}