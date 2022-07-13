import {Outlet} from "react-router-dom";

import {LayoutHeader} from "../../components";

function MainLayout(){
    return (
        <div>
            <LayoutHeader/>
            <hr/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};