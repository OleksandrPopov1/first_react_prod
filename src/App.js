import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import {
    AlbumsPage,
    CarsPage,
    CommentsPage, FormsNewCarPage,
    HomePage,
    JasonPlaceholderPage,
    PostsPage,
    ShowAllCarsPage,
    TodosPage
} from "./pages";

function App() {
    return (
        <div>
            <div className='menuBlock'>
                <h2>Menu</h2>
                <div className='menuLinksBlock'>
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div>
                        <div><Link to={'/jsonplaceholder'}>Jsonplaceholder Info</Link></div>
                        <div><Link to={'/cars'}>Cars</Link></div>
                    </div>
                </div>
            </div>

            <div>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/jsonplaceholder'} element={<JasonPlaceholderPage/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'albums'} element={<AlbumsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}>
                            <Route path={':postId'} element={<PostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/cars'} element={<CarsPage/>}>
                        <Route path={'all_cars'} element={<ShowAllCarsPage/>}/>
                        <Route path={'form'} element={<FormsNewCarPage/>}/>
                    </Route>
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
