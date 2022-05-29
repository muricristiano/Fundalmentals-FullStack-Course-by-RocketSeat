turnColorButton = document.querySelector('#theButton')

turnColorButton.addEventListener('click', turnRed);

function turnRed(){
    turnColorButton.classList.remove('red')
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        turnColorButton.classList.add('red')
    }
})

