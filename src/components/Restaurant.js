import { useState } from "react";
import AddReviewModal from "./AddReviewModal";
import ReviewModal from "./ReviewModal";

const Restaurant = ({restaurant}) => {

    const [reviews,setReviews] = useState(restaurant.reviews);

    return ( 

        <div className="restaurantCard">

            <h1> {restaurant.name}</h1>
            <h2>{restaurant.foodType}</h2>
            <h2>Opens: {restaurant.openingHour}</h2>
            <h2>Closes: {restaurant.closingHour}</h2>
            <h2>{restaurant.website}</h2>
            <h2>Rating: {restaurant.averageRating}</h2>

            <ReviewModal reviews={reviews}
            restaurant={restaurant}/>
            <AddReviewModal restaurant={restaurant}
            reviews={reviews} 
            setReviews={setReviews}/>

        </div>
     );
}
 
export default Restaurant;