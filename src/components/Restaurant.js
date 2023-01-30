
const Restaurant = ({restaurant}) => {
    return ( 

        <div className="restaurant">

            <h1> {restaurant.name}</h1>
            <h2>{restaurant.foodType}</h2>
            <h2>{restaurant.openingHour}</h2>
            <h2>{restaurant.closingHour}</h2>
            <h2>{restaurant.website}</h2>
            <h2>{restaurant.averageRating}</h2>
            




        </div>
     );
}
 
export default Restaurant;