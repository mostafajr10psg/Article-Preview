let content = document.querySelector(".content");
let profileInfo = document.querySelector(".profile-info");
let share = document.querySelector(".share");
let socialLinks = document.querySelector(".social-links");

let shareIcon = document.querySelector(".share-icon");
function addColorsToShareIcon() {
  shareIcon.style.backgroundColor = "rgb(110 125 151)";
  shareIcon.style.color = "var(--light-g-blue)";
}

function reomveColorsFromShareIcon() {
  removeProperties(shareIcon, "background-color", "color");
}

function removeProperty(ele, property) {
  ele.style.removeProperty(property);
}

function removeProperties(ele, ...properties) {
  properties.forEach((prop) => {
    ele.style.removeProperty(prop);
  });
}
// mobile
if (matchMedia("(max-width: 900px)").matches) {
  content.after(socialLinks);
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("share-icon")) {
      profileInfo.style.display = "none";
      socialLinks.style.transform = "translateY(0)";
      socialLinks.style.height = "70px";
      shareIcon.style.display = "none";
      document.querySelector(".desc").style.marginBottom = "0";
      addColorsToShareIcon();
    } else {
      if (!e.target.closest(".social-links")) {
        removeProperties(socialLinks, "transform", "height");
        reomveColorsFromShareIcon();
        removeProperty(profileInfo, "display");
        removeProperty(shareIcon, "display");
        removeProperty(document.querySelector(".desc"), "margin-bottom");
        share.append(shareIcon);
      }
    }
  });
}
// monitor
else {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("share-icon")) {
      socialLinks.style.cssText = `bottom: 65px; opacity: 1; z-index: 10;`;
      matchMedia("(min-width: 901px) and (max-width: 1050px)").matches
        ? (socialLinks.style.bottom = "110px")
        : "";
      addColorsToShareIcon();
    } else {
      if (!e.target.closest(".social-links")) {
        removeProperties(socialLinks, "opacity", "bottom", "z-index");
        reomveColorsFromShareIcon();
      }
    }
  });
}
