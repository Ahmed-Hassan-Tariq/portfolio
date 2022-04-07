import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import './contact.css';
import { Button } from '@mui/material';
import ContactUs from './ContactUs';
const style = {
  padding: '20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f76a52',
  color: '#ffffff',
  border: 'none',
  outline: 'none',
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
      <div>

    <div className='button_check_contact' onClick={handleOpen}><Button variant="contained" border="none" radius="none"  >SEND MESSAGE</Button></div>    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ContactUs />
        </Box>
      </Modal>
    </div>
  );
}






