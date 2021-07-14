let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.getElementById("btn");
css.textContent = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    color1.value=randomColor;
    color2.value=randomColor2;
    colorChange();
        //random color will be freshly served
}

function colorChange(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
};

btn.addEventListener("click", generateRandomColor);
color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);

