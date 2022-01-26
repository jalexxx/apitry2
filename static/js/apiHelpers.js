const { renderPublicRepoCount } = require("./helpers")

function getData(username){
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then(renderPublicRepoCount)
}


module.exports = { getData }

