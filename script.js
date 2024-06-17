const hover_state = document.querySelector("#hoverState");
const shareIcon = document.querySelector(".icon-share");

hover_state.style.visibility = "hidden";

function _hover() {
    const svg = document.getElementById("svgImage");
    const svgPath = svg.querySelector("path");

    shareIcon.addEventListener("mouseover",  () => {
        shareIcon.style.backgroundColor = "#6e8098";
        svgPath.setAttribute("fill", "hsl(0, 0%, 100%)");
        hover_state.style.visibility = "visible";
    });
    
    shareIcon.addEventListener("mouseout", () => {
        shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
        svgPath.setAttribute("fill", "#6E8098");
        hover_state.style.visibility = "hidden";
    });
}

_hover();