import Restaurant from "./Restaurant";

const RestaurantList = ({restaurants}) => {

    const restaurantComponents = restaurants.map ((restaurant) =>{

        return (
            <Restaurant 
            key = {restaurant.id}
            restaurant = {restaurant}/>

    
        )

    })


    return ( 
        <>
         <hr/>
         {restaurantComponents}
        </>

     );
}
 
export default RestaurantList ;