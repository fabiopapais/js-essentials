function verificar(){
    // variables declaration
    var data = new Date() 
    anoAtual = data.getFullYear() // Criando uma variável que armazena o ano atual 
    
    var anoUser = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    var footer = window.document.getElementById("footer")


    //checking everything
    if (anoUser.value.lenght = 0 || anoUser.value > anoAtual) { /* Se o usuário não colocar o ano OU o ano for maior que o atual  */
        window.alert('Verifique os dados e tente novamente')
    }
    else {        
        var sexForm =document.getElementsByName("radsex")
        var idade = anoAtual - Number(anoUser.value)
        var gênero = '' 
        var img = document.createElement('img') // Criando uma tag de img pelo JS
        img.setAttribute('id', 'foto') //Dando um id chamado "foto" para a img

        if (sexForm[0].checked){ // Caso o rad de HOMEM seja pressionado (Selecionando o primeiro rad da mesma forma que um array)
            gênero = "Homem"
            if (idade <= 12 && idade > 0) {
                //Criança
                img.setAttribute("src", "foto-bebe-m.png")
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "foto-jovem-m.png")
            }
            else if (idade < 50){
                //Adulto
                img.setAttribute("src", "foto-adulto-m.png")
            }
            else { 
                //Idoso
                img.setAttribute("src", "foto-idoso-m.png")
            }
        }

        else { // Caso o rad de MULHER seja pressionado
            gênero = 'Mulher'
            if (idade < 12 && idade >= 0) {
                //Criança
                img.setAttribute("src", "foto-bebe-f.png")
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "foto-jovem-f.png")
            }
            else if (idade < 50){
                //Adulto
                img.setAttribute("src", "foto-adulto-f.png")
            }
            else {
                //Idoso
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
        res.style.textAlign = 'center' // Apenas alinhando o texto pelo JS
        res.innerHTML = `Detectamos <b>${gênero}</b> com <b>${idade}</b> anos` // Fazendo o display de tudo
        res.appendChild(img)   // Criando uma tag (child) <img> dentro de "res"
        footer.innerHTML = 'Feito no curso de JS do <i>&copy; CursoemVídeo</i>'
    }

}