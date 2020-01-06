var css = document.querySelector("h3:nth-of-type(2)");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    console.log("lol");
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateRandomColor);