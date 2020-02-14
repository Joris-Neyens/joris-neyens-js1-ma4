const baseUrl = "https://api.rawg.io/api/games";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGames(json);
    })
    .catch(function() {
        console.log("error");
    });

function createGames(json) {

    const results = json.results;
    console.dir(results)

    const divContainer = document.querySelector(".results");

    let html = "";

    results.forEach(function(result) {
        html += `<div class="game">
                <h2>${result.name}</h2>
                <img src="${result.background_image}" alt="${result.name}">
                </div>`
    });

    divContainer.innerHTML = html;
}