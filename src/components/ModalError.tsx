import React, { FC } from 'react' 
import { Modal, Typography, Box} from '@mui/material'

type PropTypes = {
    open: boolean
    setOpen: any
}

const ModalError: FC<PropTypes> = function ({ open, setOpen }: any) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Empty value
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Value can not be empty, please write down your task.
                </Typography>
            </Box>
        </Modal>
    );
}

export default ModalError