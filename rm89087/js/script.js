
//FUNÇÃO PADRÃO
function minhaFuncao(){
    console.log("Bem vindos AGAIN!!")
    return "Bem Vindos AGAIN!!"
}

//ARROW-FUNÇTION
//const minhaFuncao = () => "Bem Vindos AGAIN!!"



function soma(numero1, numero2){
    console.log(numero1+numero2)
    return numero1+numero2

}

//console.log(soma(2,2))

const h1 = document.querySelector('#titulo1')
// h1 = addEventListener('click', function(){
//    h1.innerHTML = soma(2,2)
// }) 

h1.addEventListener('click', ()=>h1.innerHTML = soma(2,2))

console.log(minhaFuncao())







