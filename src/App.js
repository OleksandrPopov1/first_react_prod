import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import {AlbumsPage, CommentsPage, HomePage, JasonPlaceholderPage, TodosPage} from "./pages";

function App() {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <div><Link to={'/jsonplaceholder'}>Jsonplaceholder Info</Link></div>
                    {/*<div><Link to={'/form'}>Create Form</Link></div>*/}
                </div>
            </div>

            <div>
                
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/jsonplaceholder'} element={<JasonPlaceholderPage/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'albums'} element={<AlbumsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}>

                        </Route>
                    </Route>
                    {/*<Route path={'/form'}/>*/}
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
