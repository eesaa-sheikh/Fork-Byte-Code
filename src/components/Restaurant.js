import { useState } from "react";
import AddReviewModal from "./AddReviewModal";
import ReviewModal from "./ReviewModal";

const Restaurant = ({restaurant}) => {

    const [reviews,setReviews] = useState(restaurant.reviews);

    return ( 

        <div className="restaurantCard">

            <h1> {restaurant.name}</h1>
            <hr/>
            <h2 className="restaurant-info">{restaurant.foodType}</h2>
            <h2 className="restaurant-info">Opens: {restaurant.openingHour}</h2>
            <h2 className="restaurant-info">Closes: {restaurant.closingHour}</h2>
            <h2 className="restaurant-info">{restaurant.website}</h2>
            <h2 className="restaurant-info">Rating: {Math.round(restaurant.averageRating * 10)/10}</h2>
            <hr/>
            

            <ReviewModal reviews={reviews}
            restaurant={restaurant}/>
            <AddReviewModal restaurant={restaurant}
            reviews={reviews} 
            setReviews={setReviews}/>

        </div>
     );
}
 
export default Restaurant;