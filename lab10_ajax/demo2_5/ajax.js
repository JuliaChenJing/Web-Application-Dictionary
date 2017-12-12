var animalContainer = document.getElementById("animal-info");

$(document).ready(function () {
    $("#btn").click(function () {

        console.log(' button clicked');
        $.ajax({
            url: 'https://learnwebcode.github.io/json-example/animals-1.json',
            type: 'GET',
            success: function (result) {
                renderHTML(result);
            }
        });
    });
});



function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';

    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}