import {axiosService} from "./axios.service";
import {urls} from "../constans";

export class CommentsService{
    getComments() {
        return axiosService.get(urls.comments);
    }

    getComment(id) {
        return axiosService.get(urls.comments + '/' + id);
    }
}