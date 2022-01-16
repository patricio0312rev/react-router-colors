import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth='x1'>
                <Toolbar disableGutters>
                    <Typography variant='h6' noWrap component='div' sx={{ mr:2, display: {xs:'none', md:'flex'} }}>
                        ColorRouter
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/color-screen/red">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Red
                            </Button>
                        </Link>
                        
                        <Link to="/color-screen/blue">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Blue
                            </Button>
                        </Link>

                        <Link to="/color-screen/green">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Green
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
