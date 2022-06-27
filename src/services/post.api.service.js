import axios from "axios";

const allPosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const getPosts = () => allPosts.get('').then(value => value);

const getPost = (id) => allPosts.get('/' + id).then(value => value);

const getAllPostsFromUser = (id) => allPosts.get('?userId=' + id).then(value => value);

export {getPosts, getPost, getAllPostsFromUser};
