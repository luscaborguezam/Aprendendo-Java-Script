// while (condição){

// }
function ComerFatia(qtd_fatia){
    var quantidade = qtd_fatia
    quantidade -= 1
    return quantidade
}


function Comendo_pizza(){
    var fatias = 10
    var cont = 0;
    while(fatias > 0){
        cont +=1
        fatias = ComerFatia(fatias)
        console.log(`Comendo o ${cont}° pedaço`)
    }//fim while
    console.log('Não há mais pizza')
}

Comendo_pizza()



// do{

// } while (condicao)

do{
    console.log('hop')
}while(1<3)