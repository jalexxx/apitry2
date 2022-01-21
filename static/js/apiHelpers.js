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

