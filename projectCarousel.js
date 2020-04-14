/**
 * Scrape data and loop through pinned repositories listed on a GitHub user's profile
 * @param {String} id
 */

function projectCarousel(id) {

    $.ajax({
        type: "Post",
        url: "/test.py"
    }).done(function() {
        document.getElementById(id).innerHTML = "<p>Done executing test.py</p>";
    });

}