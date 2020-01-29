var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

function phrase(vetor) {
    for (object of vetor) {
        console.log(`O ${object.nome} tem as habilidades: ${object.habilidades.join(", ")}`) // O join() irá unir nosso array em uma só string, onde podemos especificar a separação
    }
}
phrase(usuarios)