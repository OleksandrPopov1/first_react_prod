import {Link, Outlet} from "react-router-dom";


function CarsPage(){
    return (
        <div>
            <h2>Select something</h2>
            <div>
                <div><Link to={'all_cars'}>Show all cars</Link></div>
                <div><Link to={'form'}>Create new car</Link></div>
            </div>

            <Outlet/>
        </div>
    );
}

export {CarsPage}