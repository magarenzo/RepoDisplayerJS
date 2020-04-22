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
     * Update the values of skippedProject to any repositories you want to skip, otherwise leave the array empty
     * CHANGE ABOVE
     */

    const div = document.getElementById(id);

    // Continue if the ID of the Div we are writing to is valid
    if (div != null) {

        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

            return response.json()

        }).then((jsonObject) => {

            for (var key in jsonObject) {

                // Continue if every value exists
                if (jsonObject[key].name &&
                    jsonObject[key].description &&
                    jsonObject[key].language) {

                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");

                    // Continue if we want to include the current project
                    if (!skippedProjects.includes(name)) {

                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var language = JSON.stringify(jsonObject[key].language).split('"').join("");

                        div.innerHTML += "<h3>" + name + "</h3> <p>" + description + ". <em>" + language + "</em>.</p><br>";

                    }

                }

            }

        });

    }

}