// import { useState } from "react"
// import ReviewFrom from "../components/ReviewForm";


// const SERVER_URL = "http://localhost:8080/review"


// const ReviewContainer = () => {

//     const[reviews,setReviews] = useState([]);

//      //Adding reviews on restaurants

//      const postReview =(newReview) =>{

//         fetch(`${SERVER_URL}`,{
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(newReview),
//         })
//         .then((response) =>response.json())
//         .then((response)=> {
//             setReviews([...reviews,response]);
//         })
//      }


//     return (  

//         <ReviewFrom
//         restaurant={restaurant}
//         postReview={postReview}
//         />




//     );
// }
 
export default ReviewContainer;