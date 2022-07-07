import {Outlet} from "react-router-dom";

import {CommentsComponent} from "../../components";

function CommentsPage(){
    return (
        <div>
            <Outlet/>
            <br/>
            <CommentsComponent/>
        </div>
    );
}

export {CommentsPage}