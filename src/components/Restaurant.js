import ReviewModal from "./ReviewModal";

const Restaurant = ({restaurant}) => {
    return ( 

        <div className="restaurant">

            <h1> {restaurant.name}</h1>
            <h2>{restaurant.foodType}</h2>
            <h2>{restaurant.openingHour}</h2>
            <h2>{restaurant.closingHour}</h2>
            <h2>{restaurant.website}</h2>
            <h2>{restaurant.averageRating}</h2>

            <ReviewModal/>


            {restaurant.reviews.map((review, id) => {

                return (
                    <div key={id}>
                        <p>Name: {review.user.name}</p>
                        <p>Review: {review.reviewText}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Date: {review.date}</p>
                        <hr/>
                    </div>


                )
                        
            }

            )}


        </div>
     );
}
 
export default Restaurant;