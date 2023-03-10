import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ReviewForm from './ReviewForm';

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
    fontFamily: "ReceiptFont",
    height: "50vh",
    overflowY: "scroll",
    
    
}

const AddReviewModal = ({restaurant, reviews,setReviews}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    return ( 
        <div>
            <Button id="review-button" onClick={handleOpen}> Add Review </Button>
            <Modal 
                
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
                <Box id="modal-box" sx={style}>
                <ReviewForm
                restaurant={restaurant}
                reviews ={reviews}
                setReviews={setReviews}
                />
                
                </Box>
            </Modal>
        </div>
     );
}
 
export default AddReviewModal;