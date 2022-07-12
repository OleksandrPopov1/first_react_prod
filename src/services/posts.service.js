import {axiosService} from "./axios.service";
import {urls} from "../constans";

export class PostsService{
    getPosts() {
        return axiosService.get(urls.posts);
    }

    getPost(id) {
        return axiosService.get(urls.posts + '/' + id);
    }
}