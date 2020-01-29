var area = window.document.getElementById("area") // "Transformamos" nossa tag em uma variável para que possamos usa-lá em nosso código
//Adicionando eventListeners para realizarem uma ação quando algo acontecer
area.addEventListener("click", click)
area.addEventListener("mouseenter", enter)
area.addEventListener("mouseout", out)

function enter() {
    area.innerText = 'Interagiu!'
}

function out() {
    area.innerText = "Interaja..."
    /*area.style.background = "rgb(255, 0, 0)"*/
}

function click() { // Function for future improvement, try to make the colors (red and green) alternate everytime i click the mouse
    area.innerText = "clicou!"
    if (area.style.background == 'green') {
        area.style.background == 'red'
    }
    if (area.style.background == 'red') {
        area.style.background == 'green'
    }

}
