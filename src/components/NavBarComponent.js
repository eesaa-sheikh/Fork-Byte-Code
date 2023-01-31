import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';

const NavBarComponent = () => {

    return ( 
        <>
        <BrowserRouter>
            <li><Link to="/Home">Home Page</Link> </li>
       
            <Routes>
                <Route path='/Home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        </> 
    )
}
 
export default NavBarComponent;