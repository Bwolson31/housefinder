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
}    });

    // Code to populate the top row with boxes
    let topRow = document.querySelector('.top-row');
    for (let i = 0; i < 5; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = `Box ${i + 1}`;
        topRow.appendChild(box);
    }

    // Code to populate the bottom row with maps
    let bottomRow = document.querySelector('.bottom-row');
    let cities = ['Minneapolis', 'New York', 'Los Angeles', 'Chicago', 'Houston']; // Example cities
    cities.forEach(city => {
        const map = document.createElement('div');
        map.classList.add('map');
        map.textContent = `Map of houses in ${city}`;
        bottomRow.appendChild(map);
    });
});

$('#search-btn').on('click', function ()
{
    
})





// zillow api code
const zillowAPIKey = 'd57186efc6933c13c8105a89d6cbaddd';
// link for the zillow api. 
// ***minneapolis is just a place holder to make sure link works***
const URL = 'https://api.bridgedataoutput.com/api/v2/test/listings?access_token=' + zillowAPIKey + '&limit=5&order=asc&near=minneapolis'


const respone = fetch(URL)
console.log(respone)
