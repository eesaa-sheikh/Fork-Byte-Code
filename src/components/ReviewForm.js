import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const SERVER_URL = "http://localhost:8080/review"


const ReviewForm = ({restaurant,setReviews,reviews}) => {

    const [rating,setRating] = useState(0);
    const [reviewText,setReviewText] = useState("");
    const [date,setDate] = useState("");
    const [userId,setUserId] = useState(1);

    const postReview =(newReview) =>{

        fetch(`${SERVER_URL}`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview),
        })
        .then((response) =>response.json())
        .then((response)=> {
        setReviews([...reviews,response]);
        })
     }



    const handleFormSubmit =(event)=>{
        event.preventDefault();
        const postBody ={
            rating,
            reviewText,
            date,
            userId,
            foodPlaceId:restaurant.id
        }
        postReview(postBody);
        setRating(0);
        setReviewText("");
        setDate("");
        setUserId(0);
       // setFoodPlaceId(0);
    }
    
    return ( 

        <form onSubmit={handleFormSubmit}>
            <h2>Submit a review</h2>
            {/* <input
                type="number"
                placeholder="Enter rating"
                
            /> */}
            <select 
                id="rating" 
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                
            </select>

            <input
                type="text"
                placeholder="Enter review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />

            <input
                type="date"
                placeholder="Enter date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>




     );
}
 
export default ReviewForm;