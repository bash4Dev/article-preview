const hover_state = document.querySelector("#hover-state");
const shareIcon = document.querySelector(".icon-share");

hover_state.style.display = "non";

function onHoverState() {
    shareIcon.style.backgroundColor = "green";
}