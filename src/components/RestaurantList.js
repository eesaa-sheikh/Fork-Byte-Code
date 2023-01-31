import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import SearchBarForm from "./SearchBarForm";
import ReviewModal from "./ReviewModal";

const RestaurantList = ({restaurants}) => {



    const [searchIn, setSearchIn] = useState("");



    const handleChange =(event) =>{

        setSearchIn(event.target.value)

    }

    return(

        
    <>
        
        <SearchBarForm
        search={searchIn}
        setSearch={handleChange}
        />

        <div>
        <input type="text" 
        placeholder="search your food type"
        onChange={handleChange}/>


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