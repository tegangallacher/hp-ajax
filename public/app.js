var data = null;

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var data = JSON.parse(jsonString);
  populateList(data);
};

// var bindEvents = function() {
//   var searchQuery = document.getElementByID('search-query');
//   var div = document.querySelector('#characters')

//   searchQuery.onkeyup = function() {
//     div.innerText = '';
//     var url = "http://hp-api.herokuapp.com/api/characters/house/" + this.value;
//     makeRequest(url, requestComplete)
//   }
// }


var app = function() {
  // var url = "http://hp-api.herokuapp.com/api/characters";
  // // bindEvents();
  // makeRequest(url, requestComplete);

  var url2 = "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
  var buttonClick = document.querySelector('#g-button')
  buttonClick.onclick = function () {
    makeRequest(url2, requestComplete);
  }

  var url3 = "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"
  var buttonClick = document.querySelector('#h-button')
  buttonClick.onclick = function () {
    makeRequest(url3, requestComplete);
  }

  var url4 = "http://hp-api.herokuapp.com/api/characters/house/slytherin"
  var buttonClick = document.querySelector('#s-button')
  buttonClick.onclick = function () {
    makeRequest(url4, requestComplete);
  }

  var url5 = "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"
  var buttonClick = document.querySelector('#r-button')
  buttonClick.onclick = function () {
    makeRequest(url5, requestComplete);
  }
};

var populateList = function(data) {
  var div = document.querySelector('#characters')
  div.innerText = '';
  data.forEach(function(character) {
    var image = document.createElement('img');
    image.src = character.image;
    image.width = 100;
    image.height = 150;
    div.appendChild(image);
  })
}



window.onload = app;