import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer';
import ContactUs from './components/ContactUs';
import WhoWeAre from './components/WhoWeAre';
import OurMission from './components/OurMission';
import Home from './components/Home';
import logo from './bestbyteNoBG.png';
import instagram from './instagram.png';
import facebook from './facebook.png'
import twitter from './twitter.png'


function App() {
  return (
    <>
     
      <BrowserRouter>
      <nav className='navbar'>
        <img  id="logo" src={logo}alt='logo of bestByte'/>
        <ul className='navbar--ul'>
          <li><Link className="nav--link" to="/Home">Home Page</Link> </li>
          <li><Link className="nav--link" to="/RestaurantContainer"> Discover Restaurants</Link></li>
        </ul>
      </nav>

      <main>
        
      
      <Routes> 
        <Route path='/ContactUs' element={<ContactUs/>}/> 
        <Route path='/WhoWeAre' element={<WhoWeAre/>}/> 
        <Route path='/OurMission' element={<OurMission/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/RestaurantContainer" element={<RestaurantContainer/>}/>

      </Routes>
      </main>
      <footer className='footer'>
        <div className='footer-leftside'>
        <h4> About Best Byte:</h4>
          <ul className='footer--ul'>
              <li><Link className="link" to="/ContactUs">Contact us</Link></li>
              <li><Link className="link" to="/WhoWeAre">Who we are</Link> </li>
              <li><Link className="link" to="/OurMission">Our mission</Link></li>
          </ul> 
          </div> 

          <div className='footer-rightside'>
            <img src={instagram} alt="instagram logo" className='social-media-logo'/>
            <img src={facebook} alt="facebook logo" className='social-media-logo'/>
            <img src={twitter} alt="twitter logo" className='social-media-logo'/>
          </div>
        </footer>
       </BrowserRouter>
    </>
  );
}

export default App;
