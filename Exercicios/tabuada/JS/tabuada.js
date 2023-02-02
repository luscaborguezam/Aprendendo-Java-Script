function gerar_tabuada(){
    $numero = document.getElementById('txtnum')
    if($numero.value.length == 0){
        alert('Preenha o campo "Número"')
    }else{
        numero = parseFloat($numero.value)
        $select = document.querySelector('select#lista')
        $select.innerHTML = ''
        console.log($select)
        for(let i = 0; i<11; i++){
            let option = document.createElement("option")
            console.log(option)
            option.setAttribute('value', `option${i}`) //item.value =`option${i}`
            option.text = `${numero}X${i}=${numero*i}`
            $select.appendChild(option)
        }
    }//fim else



} // fim count
