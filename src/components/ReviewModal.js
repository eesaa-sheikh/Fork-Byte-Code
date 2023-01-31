import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

const ReviewModal = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <div>
            <Button onClick={handleOpen}> Show reviews </Button>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
                <Box sx={style}>
                    <Typography id="modal-modal-title" 
                                variant="h6" 
                                component="h2"
                                >
                                    Review Goes Here
                    </Typography>
                    <Typography id="modal-modal-description"
                                sx={{mt:2}}
                                >
                                    This is description of review
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
 
export default ReviewModal;