import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Restaurant from './Restaurant';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#FF8C8C",
    // border: "2px solid ",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    font: "ReceiptFont",
    height: "50vh",
    overflowY: "scroll",
    fontFamily: "ReceiptFont",
    fontSize: 40
    
}

const ReviewModal = ({reviews,restaurant}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return ( 
        <div>
            <Button  id="review-button" onClick={handleOpen}> Show reviews </Button>
            <Modal 
                
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
                <Box id="modal-box" sx={style}>
                    <h2>{restaurant.name}</h2>
                {reviews.map((review, id) => {

                return (

                    <div>
                        

                    <div key={id}>
                        <p>Date: {review.date}</p>
                        <p>Name: {review.user.name}</p>
                        <p>Review: {review.reviewText}</p>
                        <p>Rating: {review.rating}</p>
                        
                        
                        <hr/>
                    </div>
                    </div>
                    


                ) } )}
                </Box>
            </Modal>
        </div>
    );
}
 
export default ReviewModal;