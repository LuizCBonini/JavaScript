const txtanos = document.getElementById('pidade')
const anos = Number(txtanos.value)

const maior_idade = (idade) => {
    if (idade > 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maior_idade(anos))