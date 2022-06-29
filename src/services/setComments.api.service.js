

let setComment = (commentObj) => {
    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(commentObj),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    })
        .then(response => response.json())
        .then(value => console.log(value));
}

export {setComment};