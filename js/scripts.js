console.log('Hello from js/scripts.js!');
document.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}

const document.getElementById("myButton")

button.addEventListener( 'click', function() {
  document.location.href = "https://drinkonda.com/collections/sparkling-tequila";
});

myButton.onclick = function() {
  window.location.replace("https://drinkonda.com/collections/sparkling-tequila");
}
