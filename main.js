const input = document.querySelector('.textInput')
const box = document.querySelector('.box')
const colorBox = document.querySelector('.colorBox')

input.addEventListener('change', function(){
    box.innerHTML= input.value;
} );

input.addEventListener('change', function(){
    colorBox.style.backgroundColor = input.value;
} );

document
.querySelector('.button-container')
.addEventListener('click', function(event){
alert(`you clicked button ${event.target.innerText}`)
})

let buffer= '0'
const screen = document.querySelector('.screen')
function handleNumber(number){
   if (buffer=== '0'){
    buffer=number;
   }else{
    buffer+=number;
   }
  
}
function handleSymbol(symbol){
  
    switch(symbol){
        case'C' :
        buffer = '0'
        break;
        case '=' :
            console.log('equals')
            break;
            case '<' :
                console.log('backspace')
                break;
                case '+':
                    case '-':
                        case '*':
                            case '/':
    }
}

function buttonClick(value){
    if (isNaN(parseInt(value))){

handleSymbol(value)
    } else {
        handleNumber(value) 
    }
  rerender();
}

function init (){

document.querySelector('.cl')
.addEventListener("click", function(event){
    buttonClick(event.target.innerText)
})
}
function rerender(){
    screen.innerText = buffer;
}
init();