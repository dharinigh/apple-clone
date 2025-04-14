const toggleButton = document.getElementById("playpause");
const carousel = document.querySelector(".track");

toggleButton.addEventListener("click", () => {
    if (carousel.classList.toggle("paused")) {
        toggleButton.textContent = "Resume";
    } else {
        toggleButton.textContent = "Pause";
    }
});