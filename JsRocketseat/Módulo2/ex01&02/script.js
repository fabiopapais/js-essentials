function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor(); // #E943F0

function adicionar() {
    var quadrado = document.createElement("div")
    var box = document.getElementById("box")
    quadrado.style = "width: 100px; height: 100px; background-color: red; margin-bottom: 10px"
    box.appendChild(quadrado)
    quadrado.onmouseover = function() {
        quadrado.style.backgroundColor = getRandomColor()
    }
}

