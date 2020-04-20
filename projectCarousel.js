/**
 * Fetch data and display repositories listed on a GitHub user's profile
 * @param {String} id
 */

function projectCarousel(id) {

    const profileName = "magarenzo";
    const div = document.getElementById(id);

    fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

        return response.json()

    }).then((jsonObject) => {

        console.log(jsonObject)

        for (var key in jsonObject) {
            div.innerHTML += "<p>";
            var name = JSON.stringify(jsonObject[key].name).split('"').join("");
            div.innerHTML += name;
            div.innerHTML += "</p><br>";
        }

    });

}