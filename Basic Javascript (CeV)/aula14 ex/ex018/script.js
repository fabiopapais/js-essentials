function verificar() {
    var txtNum = window.document.getElementById("inputNum")
    var num = Number(txtNum.value)
    var res = window.document.getElementById("res")

    if (txtNum.value.lenght == 0) {
        window.alert("Por favor, insira um número")
    }
    else {
        if (res.innerHTML.length > 0) {  // Para apagar os resultados anteriores caso haja outra consulta
            res.innerHTML = ''
        }
        var c = 1
        while (c < 11) { // Criando as tags <option> dinamicamente
            var option = window.document.createElement('option')
            option.innerText = `${num} x ${c} = ${num*c}`
            res.appendChild(option)
            c++
        }
    }
}
