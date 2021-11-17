function add() {
    
    var num = document.getElementById('txtnum')
    var n = [Number(num.value)]
    var tab = document.getElementById('tabela')

    var item = document.createElement('option')
    item.text = (`Valor ${n} adicionado`)
    tab.appendChild(item)
}

function

