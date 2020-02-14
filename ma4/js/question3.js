const baseUrl = "https://api.rawg.io/api/games/4200";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function() {
        console.log("error")
    });

function createGameDetails(json) {
    console.log(json);

    const newName = document.querySelector("h1");
    newName.innerHTML = json.name;

    const newImage = document.querySelector(".image");
    newImage.style = `background-image: url('${json.background_image}')`;
    
   
    const description = document.querySelector(".description");
    description.innerHTML = json.description;

}
