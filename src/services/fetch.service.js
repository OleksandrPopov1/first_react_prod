
const placeholderUrl = 'https://jsonplaceholder.typicode.com/';

const fetchService = (value) => fetch(placeholderUrl + value).then(response => response.json());

const fetchServices = {
    albums: () => fetchService('albums'),
    comments: () => fetchService('comments'),
    todos: () => fetchService('todos')
}

export {
    fetchServices
};