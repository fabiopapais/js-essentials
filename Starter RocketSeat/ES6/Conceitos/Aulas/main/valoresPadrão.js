// É possível setar valores padrão para os argumentos da funçao
const soma = (a = 2, b = 3) => a + b

soma() // 5
soma(1) // 4 