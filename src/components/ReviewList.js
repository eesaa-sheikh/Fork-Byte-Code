import Review from "./Review";
const ReviewList = ({reviews}) => {
    const reviewComponents = reviews.map((review) => {
        return (
            <Review
                key = {review.id}
                review = {review}
            />
        )
    })


    return ( 
        <>
        <h2>Reviews:</h2>
            {reviewComponents}
        </>
    );
}
 
export default ReviewList;