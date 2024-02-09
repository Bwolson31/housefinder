document.addEventListener('DOMContentLoaded', function (){
    let modal = document.getElementById('myModal');
    let closeButton = document.querySelector('.close');
    modal.style.display = 'block';
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal)
        {
            modal.style.display = 'none';
        }    
    });

    // Code to populate the top row with boxes
    let topRow = document.querySelector('.top-row');
    let bottomRow = document.querySelector('.bottom-row');
    let cities = ['Minneapolis', 'New York', 'Los Angeles', 'Chicago', 'Houston']; // Example cities
    
    for (let i = 0; i < cities.length; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = cities[i];
        box.addEventListener('click', function() {
            // Remove any previously selected map
            while (bottomRow.firstChild) {
                bottomRow.removeChild(bottomRow.firstChild);
            }

// zillow api code
const zillowAPIKey = 'd57186efc6933c13c8105a89d6cbaddd';
// link for the zillow api. 
// ***minneapolis is just a place holder to make sure link works***
let URL = 'https://api.bridgedataoutput.com/api/v2/test/listings?access_token=' + zillowAPIKey + '&limit=5&order=asc&near=minneapolis'


let respone = fetch(URL)


console.log(respone)
            // Create and append the map for the selected city
            let map = document.createElement('div');
            map.classList.add('map');
            map.textContent = `Map of houses in ${cities[i]}`;
            bottomRow.appendChild(map);
        });
        topRow.appendChild(box);
    }
});
