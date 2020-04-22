/**
 * Fetch data and display repositories listed on a GitHub user's profile
 * @param {String} id
 */

function projectCarousel(id) {

    /**
     * CHANGE BELOW
     * Update the value of profileName to your GitHub username
     */
    const profileName = "magarenzo";
    const skippedProjects = ["magarenzo.github.io-Blog", "magarenzo.github.io-Old"];
    /**
     * Update the values of skippedProjects to any repositories you want to skip, otherwise leave the array empty
     * CHANGE ABOVE
     */

    const div = document.getElementById(id);

    // Continue if we captured a Div specified by the passed-in ID
    if (div) {

        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

            return response.json()

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

                        /**
                         * CHANGE BELOW
                         * Capture whichever values you want to use by their keys
                         */
                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var language = JSON.stringify(jsonObject[key].language).split('"').join("");

                        div.innerHTML += "<h3><a target='_blank' href='" + url + "'>" + name + "</a></h3>";
                        div.innerHTML += "<p><em>" + description + "</em>. <strong>" + language + "</strong>.</p><br>";
                        /**
                         * Alter the HTML according to how you want to display the projects
                         * CHANGE ABOVE
                         */

                    }

                }

            }

        });

    }

}