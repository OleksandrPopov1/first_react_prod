import {NavLink, Outlet} from "react-router-dom";

import css from './mainLayout.module.css';

function MainLayout(){
    return (
        <div>
            <div className={css.links}>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};