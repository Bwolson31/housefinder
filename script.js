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
