var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min} horas`

if (hora >= 6 && hora < 12) {
    //Bom dia!
    img.src = 'img/manhã.png'
    document.body.style.background = '#F9D1B7'
} else if (hora >= 12 && hora < 18) {
    //Boa Tarde!
    img.src = 'img/tarde.png'
    document.body.style.background = '#FA8701'
} else {
    img.src = 'img/noite.png'
    document.body.style.background = '#01253E'
}