const googleMapsApiKey = 'AIzaSyCER0esM0NjKoY4gwzgkJV2YDXFp3P3mls';

let map;
let mapContainer = document.createElement('div');
mapContainer.id = 'map';
mapContainer.classList.add('map-Container');

// modal

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('cityModal');
  const closeButton = document.querySelector('.close');
  modal.style.display = 'block';
  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // List of Cities area
  function updateCityList() {
    var storedCityListContainer =
      document.getElementsByClassName('storedCityList')[0];
    storedCityListContainer.innerHTML = '';

    cityList.forEach(function (city) {
      var cityElement = document.createElement('li');
      cityElement.textContent = city;
      storedCityListContainer.appendChild(cityElement);

      let box = document.createElement('div');
      box.classList.add('box');
      box.textContent = city;
      box.addEventListener('click', function () {
        while (bottomRow.firstChild) {
          bottomRow.removeChild(bottomRow.firstChild);
        }
        bottomRow.appendChild(mapContainer);
        initMap();
      });
      topRow.appendChild(box);

      // List of cities addEventListener
      cityElement.addEventListener('click', function () {
        while (bottomRow.firstChild) {
          bottomRow.removeChild(bottomRow.firstChild);
        }

        const enteredCity = city;
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: enteredCity }, function (results, status) {
          if (status === 'OK') {
            const location = results[0].geometry.location;
            map = new google.maps.Map(mapContainer, {
              center: location,
              zoom: 10,
            });
            const marker = new google.maps.Marker({
              map: map,
              position: location,
              title: enteredCity,
            });
            bottomRow.appendChild(mapContainer);
          } else {
            alert(
              'Geocode was not successfull for the following reason: ' + status
            );
          }
        });

        bottomRow.appendChild(mapContainer);
        initMap();
      });
    });
  }

  // Code to populate the top row with boxes
  let topRow = document.querySelector('.top-row');
  let bottomRow = document.querySelector('.bottom-row');
  let cities = []; // Example cities

  // some of this is currently redundant with this version.
  function updateCityMaps() {
    topRow.innerHTML = '';
    cityList.forEach(function (city) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.textContent = city;
      box.addEventListener('click', function () {
        while (bottomRow.firstChild) {
          bottomRow.removeChild(bottomRow.firstChild);
        }
        let map = document.createElement('div');
        map.classList.add('map');
        map.textContent = `Map of ${city}`;
        bottomRow.appendChild(map);
      });
      topRow.appendChild(box);
    });
  }

  // local Storage related to modal

  $('#search-btn').on('click', function () {
    var enteredCity = $('#city-input').val();
    if (enteredCity.trim() !== '') {
      // if more than 5 cities entered, remove the last one
      if (cityList.length >= 5) {
        cityList.pop();
      }

      // add the new city to the the city list
      cityList.unshift(enteredCity);

      $('.cityList').empty();
      cityList.forEach(function (city) {
        $('.cityList').append($('<li>').text(city));
      });

      // reset our entry field
      $('#city-input').val('');

      // save our city list
      localStorage.setItem('cityList', JSON.stringify(cityList));
    }
  });

  // local storage related to List of Cities area

  $('#search-btn2').on('click', function () {
    var storedCityList = JSON.parse(localStorage.getItem('cityList')) || [];
    cityList = storedCityList;
    updateCityMaps();
    document.getElementById('cityModal').style.display = 'none';
  });

  let cityList = JSON.parse(localStorage.getItem('cityList')) || [];
  updateCityMaps();
  updateCityList();
});
