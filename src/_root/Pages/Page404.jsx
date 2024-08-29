import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <Container component="main" maxWidth="xs" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Box>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Page Not Found
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Go Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Page404;