const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    modeCheck.addEventListener('click', handlers.switchMode)
    
    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', handlers.submitHandler)
}


init()

