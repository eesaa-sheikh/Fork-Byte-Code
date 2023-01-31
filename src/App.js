import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <RestaurantContainer />
      <footer >
        <h4> About Best Byte</h4>
        <li><Link to="/ContactUs">Contact us</Link></li>
        <li>Who we are</li>
        <li>Our mission</li>
      </footer>
      <Routes> 

        <Route path='/ContactUs' element={<ContactUs/>}/> 

      </Routes>

       </BrowserRouter>
    </>
  );
}

export default App;
