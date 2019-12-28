function somar(){
    var n1 = window.document.getElementById("input1")
    var n2 = window.document.getElementById("input2")
    var res = window.document.getElementById("res")
    var nu1 = Number(n1.value)
    var nu2 = Number(n2.value) 
    soma = nu1 + nu2
    res.innerHTML = `Resultado: <b>${soma}</b>`
}    