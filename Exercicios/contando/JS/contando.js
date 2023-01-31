function count(){
    $inicio = document.getElementById('txtinicio')
    $fim = document.getElementById('txtfim')
    $passo = document.getElementById('txtpasso')
    $accountant = document.getElementById('accountant')

    if($inicio.value.length == 0 || $fim.value.length == 0 || $passo.value.length == 0){
        $accountant.innerHTML='<p>Impossivel Contar<p>'
        alert('[ERRO] Preencha todos os campos')
    } else{
        
        $accountant.innerHTML = '<p>Contando ...</p>'
        let inicio = parseInt($inicio.value)
        let fim = parseInt($fim.value)
        let passo = parseInt($passo.value)

        if (passo == 0){
            alert('Passo não pode ser = 0. será considerado passo = 1')
            passo = 1
        }

        if (inicio < fim){

            for(let i = inicio; i <= fim; i+=passo){
                $accountant.innerHTML += `${i} \u{1f449} `
            } //fim for
        } else{
            for (let i = inicio; i>=fim; i-=passo){
                $accountant.innerHTML += `${i} \u{1f449} `
            }  //fim for 
        }//fim else
        $accountant.innerHTML += `\u{1f3c1} `
    } // fim else

} // fim count