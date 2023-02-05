let $txtnum = document.querySelector('input#txtnum')
let $select = document.querySelector('select#lista')
let $res = document.querySelector('div#res')
let valores = [] //lista valores


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}// fim isNumero

function inLista(n, l){
    if (l.indexOf(Number(n)) != 1){
        return true
    } else{
        return false
    }
}

function add_item(){
    if(isNumero($txtnum.value) && !inLista($txtnum.value, valores)){
        valores.push($txtnum.value)
    } else{
        alert('Valor Inválido ou já encontrado na lista.')
    }
console.log(valores)

} // fim add_item
