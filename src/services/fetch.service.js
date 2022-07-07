
const placeholderUrl = 'https://jsonplaceholder.typicode.com/';

const fetchServicePlaceholder = (value) => fetch(placeholderUrl + value).then(response => response.json());

const fetchServices = {
    albums: () => fetchServicePlaceholder('albums'),
    comments: () => fetchServicePlaceholder('comments'),
    todos: () => fetchServicePlaceholder('todos'),
    postForComment: (postId) => fetchServicePlaceholder(`posts/${postId}`),
}

export {
    fetchServices
};