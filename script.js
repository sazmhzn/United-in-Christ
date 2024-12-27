document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  // Show search input
  searchIcon.addEventListener("click", function () {
    console.log("clicked");
    searchInput.classList.toggle("input-visible");
    if (searchInput.classList.contains("input-visible")) {
      searchInput.focus();
    }
  });
});

const topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Show button when scrolled down
    topButton.classList.add("show");
    topButton.classList.remove("hide");
  } else {
    // Hide button when at the top
    topButton.classList.add("hide");
    topButton.classList.remove("show");
  }
});

// Smooth scroll to top
topButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
