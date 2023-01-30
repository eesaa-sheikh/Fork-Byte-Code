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
        const foundRestaurants = fetch (`${SERVER_URL}/foodtype?foodType=${searchTerm}`)
        setFilteredRestaurants(foundRestaurants)
    }
    





    return (
        <>
        <SearchBarForm 
            restaurants={restaurants} 
            filterRestaurants={filterRestaurants}
        />
        <RestaurantList
        restaurants = {restaurants}
        />
        
        </>
    )
}
export default RestaurantContainer;