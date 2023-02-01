import ReviewModal from "./ReviewModal";

const Restaurant = ({restaurant}) => {
    return ( 

        <div className="restaurantCard">

            <h1> {restaurant.name}</h1>
            <h2>{restaurant.foodType}</h2>
            <h2>Opening Hour: {restaurant.openingHour}</h2>
            <h2>Closing Hour: {restaurant.closingHour}</h2>
            <h2>{restaurant.website}</h2>
            <h2>Rating: {restaurant.averageRating}</h2>

            <ReviewModal restaurant={restaurant}/>

        </div>
     );
}
 
export default Restaurant;