import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import ReviewModal from "./ReviewModal";

const RestaurantList = ({restaurants}) => {



    const [searchIn, setSearchIn] = useState("");



    const handleChange =(event) =>{

        setSearchIn(event.target.value)

    }


    const search={searchIn}
   const setSearch={handleChange}
    

    return(

        
    <>
        
        <div className="searchBar">
       
   
        <h2 id="search-bar-title">Find your next food heaven...</h2>
        <input type="text" 
        id="input-bar"
        placeholder="Search restaurant or cuisine"
        onChange={handleChange}/>
        </div>

        <div className="restaurantContainer">
            {restaurants.filter(restaurants => restaurants.foodType.toLowerCase().includes(searchIn.toLowerCase())|| restaurants.name.toLowerCase().includes(searchIn.toLowerCase()) )
            .map(restaurants =>
                
                <Restaurant 
                key = {restaurants.id}
                restaurant = {restaurants}
                />
                  
            
               
            )}

</div>
            
    
    </>

    )


    }
 

 
export default RestaurantList ;