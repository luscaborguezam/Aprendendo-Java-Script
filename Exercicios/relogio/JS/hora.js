function carregando_img(){
    $msg = document.getElementById('msg')
    $imagem = document.getElementById('img')
    var data = new Date
    //var hora = data.getHours()
    var hora = 18
    $msg.innerHTML = ` Agroa são: <strong>${hora}</strong> horas`

    if(hora >= 0 && hora < 12){
        $imagem.src = '../IMG/manha.jpg'
        console.log('manhã')
        document.body.style.background = '#72A5D1'
    } else if(hora < 18){
        $imagem.src = '../IMG/tarde.jpg'
        document.body.style.background = '#E69112'
        console.log('tarde')
    }else{
        $imagem.src = '../IMG/noite.jpg'
        document.body.style.background = '#6A5381'
        console.log('noite')
    }

}//fim carregando_img()
