const content = document.querySelector(".content");
const desc = document.querySelector(".desc");
const profileInfo = document.querySelector(".profile-info");
const socialLinks = document.querySelector(".social-links");
const shareIcon = document.querySelector(".share-icon");

function removeProperties(ele, ...props) {
  for (let prop of props) ele.style.removeProperty(prop);
}

function addColorsToShareIcon() {
  shareIcon.style.cssText = `background-color: rgb(110 125 151);
  color: var(--light-g-blue);`;
}

function reomveColorsFromShareIcon() {
  removeProperties(shareIcon, "background-color", "color");
}

document.addEventListener("click", (e) => {
  if (e.target === shareIcon) {
    socialLinks.style.cssText = `bottom: 115px; opacity: 1; z-index: 10; transform: translateY(0)`;
    shareIcon.classList.add("white");
  } else if (!e.target.closest(".social-links")) {
    removeProperties(socialLinks, "bottom", "opacity", "z-index", "transform");
    shareIcon.classList.remove("white");
  }
});
