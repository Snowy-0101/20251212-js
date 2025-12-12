const button =
document.querySelector(".btn-question");

button.addEventListener("click", () => {
    button.classList.add("animate");
});
button.addEventListener("mouseleave", () => {
    button.classList.remove("animate");
});
