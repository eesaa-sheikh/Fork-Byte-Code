import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantList";
const SERVER_URL = "http://localhost:8080/foodplace"

const RestaurantContainer = () => {

    const[restaurants,setRestaurants] = useState([]);


    useEffect(() => {
        fetch (`${SERVER_URL}`)
        .then((response) => response.json())
        .then((response) => setRestaurants(response))

    },[])

    const [restaurantReviews, setRestaurantReviews] = useState([]);

    const restaurantReviewList = (review) => {
        setRestaurantReviews([...restaurantReviews, review])
    }
    console.log(setRestaurantReviews)




    return (
        <>
        <RestaurantList
        restaurants ={restaurants}
        restaurantReviewList = {restaurantReviewList}
        />
        <h1>Hello Food Reviews</h1>
        </>
    )
}
export default RestaurantContainer;