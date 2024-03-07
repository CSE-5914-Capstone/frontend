import React from 'react';
import Typography from '@mui/material/Typography';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Import the MusicNoteIcon from Material-UI

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <MusicNoteIcon style={{ fontSize: 48, marginRight: 10 }} />
      <Typography variant='h4' component='h1'>
        Melody Miners
      </Typography>
    </div>
  );
}

export default Logo;
