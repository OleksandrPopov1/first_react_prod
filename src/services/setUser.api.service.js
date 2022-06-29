
let setUser = (userObj) =>{
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    })
        .then(response => response.json())
        .then(value => console.log(value));
}

export {setUser};