const { getData } = require('./apiHelpers');
const { darkMode, lightMode, clearForm, renderName} = require('./helpers');

function switchMode(e){
    e.target.checked ? darkMode() : lightMode();
}


function submitHandler(e){
    e.preventDefault()
    let username = e.target['first-name'].value
    renderName(username)
    getData(username)
    clearForm()
}

module.exports = { switchMode, submitHandler }
