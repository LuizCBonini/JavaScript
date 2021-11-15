function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('CheckBoxSex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/ch.png')
            } else if (idade < 60) {
                // Jovem
                img.setAttribute('src', 'img/jh.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/ih.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/cm.png')
            } else if (idade < 60) {
                // Jovem
                img.setAttribute('src', 'img/jm.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/im.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}