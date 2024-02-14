import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Box style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="body1">
        Oops! The page you're looking for does not exist.
      </Typography>
    </Box>
  );
}

export default NotFound;
