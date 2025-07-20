const socialLinks = document.querySelector(".social-links");
const shareIcon = document.querySelector(".share-icon");

document.addEventListener("click", (e) => {
  if (e.target === shareIcon) {
    shareIcon.classList.add("active");
    socialLinks.classList.add("show-social-links");
  } else if (!e.target.closest(".social-links")) {
    socialLinks.classList.remove("show-social-links");
    shareIcon.classList.remove("active");
  }
});
