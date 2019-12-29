var txtval = window.document.getElementById('txtval')
let val = Number(txtval)
var res = window.document.getElementById('res')
function verificar(){
    if (val > 60){
        res.innerHTML += 'Resultado: Você passou do limite de velocidade! <b>MULTADO!</br>'
        res.style.color = 'red'
    }
    else {
        res.innerHTML += 'Resultado: Dentro do limite de velocidade, dirija com segurança!'
        res.style.color = 'green'
    }
    res.innerHTML += '<p><b>Dirija sempre com segurança e nunca esqueça do cinto!</p></b>'   
}
