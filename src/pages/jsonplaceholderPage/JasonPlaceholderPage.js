import {Link, Outlet} from "react-router-dom";

function JasonPlaceholderPage(){
    return (
        <div>
            <h2>Info from JasonPlaceholder</h2>
            <ul>
                <li><Link to={'todos'}>Todos</Link></li>
                <li><Link to={'albums'}>Albums </Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>

            <Outlet/>

        </div>
    );
}

export {JasonPlaceholderPage}