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


