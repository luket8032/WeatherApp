const img = document.querySelector('img');
const btn = document.querySelector('button');
const searchBar = document.getElementById('search');
const url = 'https://api.giphy.com/v1/gifs/translate?api_key=XepfqnskUF7KSsP4EbvIHHclEii9a2KB&s=';

function getImg() {
    let searchParams = searchBar.value;
    let urlWithSearch = url + searchParams;
    fetch(urlWithSearch, {mode:'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch(function() {
        window.alert('There were no results from your search')
    })
}

btn.addEventListener('click', getImg)