var area = window.document.getElementById("area") // "Transformamos" nossa tag em uma variável para que possamos usa-lá em nosso código
//Adicionando eventListeners para realizarem uma ação quando algo acontecer
area.addEventListener("click", clicar)
area.addEventListener("mouseenter", entrar)
area.addEventListener("mouseout", sair)

function entrar() {
    area.innerText = 'Interagiu!'
    }

function sair() {
    area.innerText = "Interaja..."
    area.style.background = "rgb(255, 0, 0)"
    }

function clicar() {
    area.innerText = "clicou!"
    area.style.background = "green"
        }