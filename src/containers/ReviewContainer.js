import { useEffect, useState } from "react";
import ReviewList from "../components/ReviewList";

const SERVER_URL = "http://localhost:8080/review";

const ReviewContainer = () => {
    
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`${SERVER_URL}`)
            .then((response) => response.json())
            .then((response) => setReviews(response))
    }, [])


    
    return ( 
        <>
            <ReviewList reviews={reviews}/>
        </>
     );
}
 
export default ReviewContainer;