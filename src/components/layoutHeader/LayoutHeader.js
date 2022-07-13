import {NavLink} from "react-router-dom";

import css from "./layoutHeader.module.css";

function LayoutHeader(){
    return (
        <div className={css.links}>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
}

export {LayoutHeader};