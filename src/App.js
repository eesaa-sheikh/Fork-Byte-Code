import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer';
import ContactUs from './components/ContactUs';
import WhoWeAre from './components/WhoWeAre';
import OurMission from './components/OurMission';
import Home from './components/Home';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <nav>
        <li><Link to="/Home">Home Page</Link> </li>
        <li><Link to="/RestaurantContainer"> Restaurant Directory</Link></li>
      </nav>

      <Routes> 
        <Route path='/ContactUs' element={<ContactUs/>}/> 
        <Route path='/WhoWeAre' element={<WhoWeAre/>}/> 
        <Route path='/OurMission' element={<OurMission/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/RestaurantContainer" element={<RestaurantContainer/>}/>
      </Routes>
        <footer >
            <h4> About Best Byte</h4>
            <li><Link to="/ContactUs">Contact us</Link></li>
            <li><Link to="/WhoWeAre">Who we are</Link> </li>
            <li><Link to="/OurMission">Our mission</Link></li>
        </footer>
       </BrowserRouter>
    </>
  );
}

export default App;
