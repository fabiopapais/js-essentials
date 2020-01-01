function load() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //hora = 19

    msg.innerHTML = `Agora são ${hora} horas da ${msgComplement(hora)}`

    if (hora >= 5 && hora <= 12) {
        img.src = "manha.png"
        document.body.style.background = "rgb(252, 210, 0)"
    }
    else if (hora > 12 && hora < 18) {
        img.src = "tarde.png"
        document.body.style.background = "rgb(200, 128, 0)"
    }
    else {
        img.src = "noite.png"
        document.body.style.background = "rgb(59, 71, 109)"
    }
}
function msgComplement(time) {   // Função para complementar a mensagem da hora ;)
    if (time >= 5 && time <= 12) {
        return "manhã!"
    }
    else if (time > 12 && time < 18) {
        return "tarde!"
    }
    else {
        return "noite!"
    }
}