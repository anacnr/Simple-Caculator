/*Eu me inspirei fazer assim por conta de um template React*/

document.addEventListener("DOMContentLoaded", ()=>{

/*Elementos*/
const body = document.querySelector('body')

const header = document.createElement('header')
body.appendChild(header)

let h1 = document.createElement('h1')
h1.id = 'title'
h1.innerHTML = 'Tabuada simples'
header.appendChild(h1)

const main = document.createElement('main')
body.appendChild(main)

let paragraph = document.createElement('p')
paragraph.id = 'phrase'
paragraph.innerHTML = 'Adicione números e escolha o sinal.'
main.appendChild(paragraph)

const advice = document.createElement('p')
advice.id = 'advice'
advice.innerHTML = 'Utilize o símbolo / para divisão.'
main.appendChild(advice)

const div = document.createElement('div')
main.appendChild(div)

//Primeiro número
let first_input = document.createElement('input')
first_input.type = 'number'
first_input.id = 'first'
first_input.maxLength = '5'
first_input.placeholder = 0
first_input.required = true
div.appendChild(first_input)

let first_label = document.createElement('label')
first_label.htmlFor = 'first'
first_label.id = 'first_label'
first_label.textContent = 'Número'
first_label.className = 'input-label'
div.appendChild(first_label)

//Operador
let operator = document.createElement('input')
operator.type = 'text'
operator.id = 'operator'
operator.className = 'operator'
operator.placeholder = '+'
operator.maxLength = '8'
operator.required = true
div.appendChild(operator)

let second_label = document.createElement('label')
second_label.htmlFor = 'operator'
second_label.id = 'second_label'
second_label.textContent = 'Operador'
second_label.className = 'input-label'
div.appendChild(second_label)

//Segundo número
let second_input = document.createElement('input')
second_input.type = 'number'
second_input.id = 'second'
second_input.maxLength = '5'
second_input.placeholder = 0
second_input.required = true
div.appendChild(second_input)

let third_label = document.createElement('label')
third_label.htmlFor = 'second'
third_label.id = 'third_label'
third_label.textContent = 'Número'
third_label.className = 'input-label'
div.appendChild(third_label)

const button = document.createElement('button')
button.type = 'button'
button.id = 'button_calc'
button.textContent = 'Calcular'
div.appendChild(button)

/*Linha que vai armazenar o resultado*/
let line_count =  document.createElement('hr')
div.appendChild(line_count)

/*Parágrafo com o resultado*/
let paragraph_count = document.createElement('p')
paragraph_count.id = 'paragraph_count'
paragraph_count.textContent = ''
div.appendChild(paragraph_count)

/*Operações*/
const sum = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let totalSum = first_number + second_number

    paragraph_count.innerHTML = totalSum

    /*let paragraph_count = document.createElement('p')
    paragraph_count.id = 'paragraph_count'
    paragraph_count.innerHTML = totalSum
    div.appendChild(paragraph_count)*/
}//Função de soma

const minus = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let variation = first_number - second_number

    let paragraph_count = document.createElement('p')
    paragraph_count.id = 'paragraph_count'
    paragraph_count.innerHTML = variation
    div.appendChild(paragraph_count)
}//Função de subtração

const multiple = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let product = first_number * second_number

    let paragraph_count = document.createElement('p')
    paragraph_count.id = 'paragraph_count'
    paragraph_count.innerHTML = product
    div.appendChild(paragraph_count)
}//Função de multiplicação

const split = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let quotient = first_number / second_number

    let paragraph_count = document.createElement('p')
    paragraph_count.id = 'paragraph_count'
    paragraph_count.innerHTML = totalSum
    div.appendChild(quotient) 
}//Função de divisão

/*Evento que gera o resultado*/
button.addEventListener("click", ()=>{
    if(operator.value == '+' || operator.value == 'mais'){
        sum()
            //button.innerHTML = 'De novo'          
            //button.addEventListener("click", ()=>{
               
                setTimeout(()=>{
                    //Limpa os values
                    operator.value = ''
                    document.querySelectorAll('input')[0].value = ''
                    document.querySelectorAll('input')[2].value = ''
                    let paragraph_count = document.querySelector("#paragraph_count")
                    
                    paragraph_count.textContent = ''
                },1500)
            //})
    }
    else if(operator.value == '-' || operator.value == 'menos'){
        minus()
            //button.innerHTML = 'De novo'          
            //button.addEventListener("click", ()=>{
               
                setTimeout(()=>{
                    //Limpa os values
                    operator.value = ''
                    document.querySelectorAll('input')[0].value = ''
                    document.querySelectorAll('input')[2].value = ''
                    let paragraph_count = document.querySelector("#paragraph_count")
                    
                    paragraph_count.textContent = ''
                },1500)
            //})
    }
    else if(operator.value == '*' || operator.value == 'x' || operator.value == 'multiplicação'){
        multiple()
            //button.innerHTML = 'De novo'          
            //button.addEventListener("click", ()=>{
               
                setTimeout(()=>{
                    //Limpa os values
                    operator.value = ''
                    document.querySelectorAll('input')[0].value = ''
                    document.querySelectorAll('input')[2].value = ''
                    let paragraph_count = document.querySelector("#paragraph_count")
                    
                    paragraph_count.textContent = ''
                },1500)
            //})
    }
    else if(operator.value == '/' || operator.value == 'divisão'){
        split()
            //button.innerHTML = 'De novo'          
            //button.addEventListener("click", ()=>{
               
                setTimeout(()=>{
                    //Limpa os values
                    operator.value = ''
                    document.querySelectorAll('input')[0].value = ''
                    document.querySelectorAll('input')[2].value = ''
                    let paragraph_count = document.querySelector("#paragraph_count")
                    
                    paragraph_count.textContent = ''
                },1500)
            //})
    }
    else{
        setTimeout(()=>{
            alert('Operação inválida')
        },1500)
    }
});//Evento do botão
});//Carregamento