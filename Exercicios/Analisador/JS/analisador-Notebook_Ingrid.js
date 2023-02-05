let $txtnum = document.querySelector('input#txtnum')
let $select = document.querySelector('select#lista')
let $res = document.querySelector('div#res')
let valores = [] //lista valores
let i = 0

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}// fim isNumero

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1 ){//se o index retornado for diferente de -1 retorna true
        return true //significa que este número já existe na lista
    } else{
        return false //númeo não oexiste na lista
    }
}

function add_item(){
    if(isNumero($txtnum.value) && !inLista($txtnum.value, valores)){
        valores.push(Number($txtnum.value))
        let $option = document.createElement('option')
        $option.value = `op${i}`
        i += 1
        $option.text = `Valor ${$txtnum.value} adicionado.`
        $select.appendChild($option)
        $res.innerHTML = ''
        // alert('Adicionado')
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    $txtnum.value = ''
    $txtnum.focus()
} // fim add_item

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else{
        let total_elementos = valores.length

        //descobrindo o maior e o menor número
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0.0


        for(let posicao in valores){
            if (valores[posicao] > maior){
                maior = valores[posicao]
            } else if (valores[posicao] < menor){
                menor = valores[posicao]
            }
            soma += valores[posicao]
        }//fim for
        media = soma/total_elementos
        console.log(media)
        $res.innerHTML=''
        $res.innerHTML=`<p>Ao todo temos ${total_elementos} números cadastrados<p>`
        $res.innerHTML += `<p>Maior número: ${maior}</p> <p>Menor Número: ${menor} </p>`
        $res.innerHTML += `<p>Soma dos numeros é: ${soma}</p>`
        $res.innerHTML += `<p>A média dos números é: ${media}</p>`
        $select.innerHTML = ''    
        valores = []
    }
}//fim finalizar