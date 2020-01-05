function verificar() {
    // Creating variables that store the inputs
    var txtPasso = window.document.getElementById("txtPasso")
    var txtInicio = window.document.getElementById("txtInicio")
    var txtFinal = window.document.getElementById("txtFinal")

    var res = window.document.getElementById("res")

    //Transforming input variables to number type
    var passo = Number(txtPasso.value)
    var inicio = Number(txtInicio.value)
    var final = Number(txtFinal.value)
    // console.log(inicio,final,passo) // Debugging

    if (passo == "" || inicio == "" || final == "") {
        window.alert("Insira os dados corretamente!")
    }
    else {
        if (inicio < final) {
            if (passo <= 0) {
                window.alert("Por favor, insira um número de passo válido")
            }
            else {
                var resMoment = ''
                while (inicio < final) {
                    resMoment += `${inicio} 👉 ` // The importance of the correct order of the "+=" signal, that is closer to "resMoment", that is the variable that we wanna sum
                    // console.log(resMoment) // Debugging
                    inicio = inicio + passo
                }
                res.innerHTML = `${resMoment} 🏁`
                window.document.body.style.backgroundColor = "green"
            }
        }
        else {
            if (passo <= 0) {
                window.alert("Por favor, insira um número de passo válido")
            }
            else {
                var resMoment = ''
                while (inicio > final) {
                    resMoment += `${inicio} 👉 ` // The importance of the correct order of the "+=" signal, that is closer to "resMoment", that is the variable that we wanna sum
                    // console.log(resMoment) // Debugging
                    inicio = inicio - passo
                }
                res.innerHTML = `${resMoment} 🏁`
                window.document.body.style.backgroundColor = "green"
            }
        }
    }
}