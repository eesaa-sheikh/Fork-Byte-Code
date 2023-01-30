import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantList";
import SearchBarForm from "../components/SearchBarForm";

const SERVER_URL = "http://localhost:8080/foodplace"

const RestaurantContainer = () => {

    const[restaurants,setRestaurants] = useState([]);


    useEffect(() => {
        fetch (`${SERVER_URL}`)
        .then((response) => response.json())
        .then((response) => setRestaurants(response))

    },[])

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const filterRestaurants = (searchTerm) => {
        fetch (`${SERVER_URL}/foodtype?foodType=${searchTerm}`)
    }





    return (
        <>
        <SearchBarForm restaurants = {restaurants}/>
        <RestaurantList
        restaurants ={restaurants}/>
        
        <h1>Hello Food Reviews</h1>
        </>
    )
}
export default RestaurantContainer;