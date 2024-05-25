// this function will show popup display for potrait photography works
export function showPortrait() {
  const popupParent = document.querySelector(".showcase-popup-parent");
  const showPopPotrait = document.querySelector(".show-popup-portrait");

  popupParent.classList.add("active");
  showPopPotrait.classList.add("active");
}

// this function will show popup display for street photography works
export function showStreet() {
  const popupParent = document.querySelector(".showcase-popup-parent");
  popupParent.classList.add("active");

  const showStreet = document.querySelector(".show-popup-street");
  showStreet.classList.add("active");
}

// this function will show popup display for Wedding photography works
export function showWedding() {
  const popupParent = document.querySelector(".showcase-popup-parent");
  popupParent.classList.add("active");

  const showWedding = document.querySelector(".show-popup-wedding");
  showWedding.classList.add("active");
}

// this function will show popup display for Wedding photography works
export function showWild() {
  const popupParent = document.querySelector(".showcase-popup-parent");
  popupParent.classList.add("active");

  const showWild = document.querySelector(".show-popup-wild");
  showWild.classList.add("active");
}

//-------------------------- this function will hide the popup display when clicking x button
export function hidePopup() {
  const popupParent = document.querySelector(".showcase-popup-parent");
  popupParent.classList.remove("active");

  const showPopPotrait = document.querySelector(".show-popup-portrait");
  showPopPotrait.classList.remove("active");

  const showStreet = document.querySelector(".show-popup-street");
  showStreet.classList.remove("active");

  const showWedding = document.querySelector(".show-popup-wedding");
  showWedding.classList.remove("active");

  const showWild = document.querySelector(".show-popup-wild");
  showWild.classList.remove("active");
}
