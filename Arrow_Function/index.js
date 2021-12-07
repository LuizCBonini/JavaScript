const txtanos = document.getElementById('pidade')
const anos = Number(txtanos.value)

const maior_idade = (anos) => {
    if (anos > 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maior_idade())