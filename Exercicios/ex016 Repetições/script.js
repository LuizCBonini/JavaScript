function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (passo.value.length == 0 || fim.value.length == 0 || inicio.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Passo invalido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            } 
        } else {
                // Contagem decrescente
                for (var c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
    }
        res.innerHTML += '\u{1F3C1}'
}