// add a listener to buttons
var planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

function addPlanetButtonListener(planetButtonElement) {
  planetButtonElement.addEventListener("click", planetButtonClick);
}

function planetButtonClick(event) {
  var clickedButton = event.currentTarget;

  // generate the class of the selected planet's details element
  // for example: ".planet-details-Venus" or ".planet-details-Earth"
  var detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;

  // find this element
  var detailsElement = document.querySelector(detailsElementCssSelector);

  // remove selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);

  // remove selected state from all details elements
  var planetDetailElements = document.querySelectorAll(".planet-details");
  planetDetailElements.forEach(updatePlanetDetailState);

  // add selected state just to the clicked button
  detailsElement.classList.add("currently-selected-planet");
  clickedButton.classList.add("currently-selected-button");
}

function updateClickedButtonState(planetButtonElement) {
  planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
  planetDetailElement.classList.remove("currently-selected-planet");
}
