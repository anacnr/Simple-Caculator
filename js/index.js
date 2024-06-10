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

let first_input = document.createElement('input')
first_input.type = 'number'
first_input.id = 'first'
first_input.maxLength = '4'
first_input.placeholder = 0
first_input.required = true
div.appendChild(first_input)

let first_label = document.createElement('label')
first_label.htmlFor = 'first'
first_label.id = 'first_label'
first_label.textContent = 'Primeiro número:'
first_label.className = 'input-label'
div.appendChild(first_label)

let operator = document.createElement('input')
operator.type = 'text'
operator.id = 'operator'
operator.className = 'operator'
operator.placeholder = 'Sinal'
operator.maxLength = '8'
operator.required = true
div.appendChild(operator)

let second_label = document.createElement('label')
second_label.htmlFor = 'operator'
second_label.textContent = 'Operador:'
second_label.className = 'input-label'
div.appendChild(second_label)

let second_input = document.createElement('input')
second_input.type = 'number'
second_input.id = 'second'
second_input.maxLength = '4'
second_input.placeholder = 0
second_input.required = true
div.appendChild(second_input)

let third_label = document.createElement('label')
third_label.htmlFor = 'second'
third_label.textContent = 'Segundo número:'
third_label.className = 'input-label'
div.appendChild(third_label)

const button = document.createElement('button')
button.type = 'button'
button.id = 'button'
button.textContent = 'Calcular'
div.appendChild(button)

/*Operações*/
const sum = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let totalSum = first_number + second_number

    console.log(first_input.value + "+" + second_input.value + '=' + totalSum)
}//Função de soma

const minus = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let variation = first_number - second_number

    console.log(first_input.value + "-" + second_input.value + '=' + variation)
}//Função de subtração

const multiple = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let product = first_number * second_number

    console.log(first_input.value + "x" + second_input.value + '=' + product)    
}//Função de multiplicação

const split = ()=>{
    let first_number = Number(first_input.value)
    let second_number = Number(second_input.value)
    let quotient = first_number / second_number

    console.log(first_input.value + " div " + second_input.value + '=' + quotient)  
}//Função de divisão

/*Evento que gera o resultado*/
button.addEventListener("click", ()=>{
    if(operator.value == '+' || operator.value == 'mais'){
        sum()
        //Limpa os values
        operator.value = ''
        document.querySelectorAll('input')[0].value = ''
        document.querySelectorAll('input')[2].value = ''
    }
    else if(operator.value == '-' || operator.value == 'menos'){
        minus()
        //Limpa os values
        operator.value = ''
        document.querySelectorAll('input')[0].value = ''
        document.querySelectorAll('input')[2].value = ''
    }
    else if(operator.value == '*' || operator.value == 'x' || operator.value == 'multiplicação'){
        multiple()
        //Limpa os values
        operator.value = ''
        document.querySelectorAll('input')[0].value = ''
        document.querySelectorAll('input')[2].value = ''
    }
    else if(operator.value == '/' || operator.value == 'divisão'){
        split()
        //Limpa os values
        operator.value = ''
        document.querySelectorAll('input')[0].value = ''
        document.querySelectorAll('input')[2].value = ''
    }
    else{
        console.log("Operação inválida");
    }
})
});//Carregamento