
const Restaurant = ({restaurant}) => {
    return ( 

        <div className="restaurant">

            <h1> {restaurant.name}</h1>
            <h2>{restaurant.foodType}</h2>
            <h2>{restaurant.openingHour}</h2>
            <h2>{restaurant.closingHour}</h2>
            <h2>{restaurant.website}</h2>
            <h2>{restaurant.averageRating}</h2>

            {restaurant.reviews.map((review, id) => {
                return (
                    <div key={id}>
                        <p>{review.user.name}</p>
                        <p>{review.reviewText}</p>
                        <p>{review.rating}</p>
                        <p>{review.date}</p>
                        <hr/>
                    </div>


                )
                        
            }

            )}


            {/* <h1>{restaurant.reviews[0].reviewText}</h1>
            <h1>{restaurant.reviews[1].reviewText}</h1>
            <h1>{restaurant.reviews[2].reviewText}</h1>
            <h1>{restaurant.reviews[3].reviewText}</h1> */}





        </div>
     );
}
 
export default Restaurant;