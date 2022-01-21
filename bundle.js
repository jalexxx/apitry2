(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { renderPublicRepoCount } = require("./helpers")

function getData(username){
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then(renderPublicRepoCount)
}


//function dataThings(data){
    //console.log(data);
//}

module.exports = { getData }


},{"./helpers":3}],2:[function(require,module,exports){
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

},{"./apiHelpers":1,"./helpers":3}],3:[function(require,module,exports){
function darkMode(){
    const body = document.querySelector('body');
    body.className = 'dark';
}

function lightMode(){
    const body = document.querySelector('body');
    body.className = 'light';
}

function renderPublicRepoCount(userData){
    const count = userData.public_repos;
    const span = document.getElementById('repo-count');
    span.textContent = count;
    const descrip = document.querySelector('#descrip')
    descrip.textContent = ' public repos';
    //document.getElementById('name').value = ''
};

function renderName(name){
    const accountNameHolder = document.getElementById('account-name')
    accountNameHolder.textContent = name;
}

function clearForm(){
    const form = document.querySelector('form');
    form.reset();
}

function renderError(err){
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    error.onclick = closeError;
    document.querySelector('header').appendChild(error);
}


function closeError(){
    const error = document.querySelector('.error');
    error.remove();
}

module.exports = { clearForm, darkMode, lightMode, renderName, renderPublicRepoCount, renderError, closeError }

},{}],4:[function(require,module,exports){
const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    modeCheck.addEventListener('click', handlers.switchMode)
    
    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', handlers.submitHandler)
}


init()


},{"./handlers":2}]},{},[4]);
