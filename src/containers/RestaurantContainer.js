import { useEffect, useState } from "react";
import Restaurant from "../components/Restaurant";
import RestaurantList from "../components/RestaurantList";
import SearchBarForm from "../components/SearchBarForm";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


const SERVER_URL = "http://localhost:8080/foodplace"


const RestaurantContainer = () => { 



    const[restaurants,setRestaurants] = useState([]);


    useEffect(() => {
        fetch (`${SERVER_URL}`)
        .then((response) => response.json())
        .then((response) => setRestaurants(response))

    },[])

    return (
        <>
  
        <BrowserRouter>
            <li>
                <Link to="/RestaurantList"> Restaurant Directory</Link>
            </li>
            <Routes>
                <Route path = "/RestaurantList" 
                    element = {
                    <RestaurantList
                    restaurants ={restaurants}/>
                }/>
            </Routes>
        
        
        </BrowserRouter>

        
        
        </>
    )
}
export default RestaurantContainer;