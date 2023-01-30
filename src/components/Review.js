const Review = ({review}) => {
    return (  
        <div className="review-card">
            <h1>{review.rating}</h1>
            <h2>{review.reviewText}</h2>
            <h2>{review.date}</h2>
            <h2>{review.user.name}</h2>

        </div>
    );
}
 
export default Review;