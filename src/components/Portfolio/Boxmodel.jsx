import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './boxmodel.css';
import Izuku from '../../assets/Izuku.jpg';

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

export default function BasicModal({modalheading, modalpara}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <div>
      <div className='portfolio_boxes' onClick={handleOpen}>
      <img src={Izuku} alt='Izuku' /> </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h1">
            {modalheading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalpara}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}






