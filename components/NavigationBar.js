import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image'
import Link from 'next/link';
import { AlternateEmailOutlined, HelpOutline, Home, Info, InfoOutlined, PaidOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { CartState } from '../context/loadCartData';


export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const {total_items} = CartState();

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <Link href='/faq'><a>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <HelpOutline />
                </IconButton>
                FAQs
            </MenuItem>
        </a></Link>

        <Link href='/contact'><a>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <AlternateEmailOutlined />
                </IconButton>
                Contact Me
            </MenuItem>
        </a></Link>

        <Link href='/donate'><a>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <PaidOutlined />
                </IconButton>
                Donate
            </MenuItem>
        </a></Link>
    </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
    >
            <Link href='faq'><a>
                <MenuItem>
                    <IconButton size="large" color="inherit">
                        <HelpOutline />
                    </IconButton>
                    <Typography color="inherit">
                        FAQs
                    </Typography>
                </MenuItem>
            </a></Link>

            <Link href='contact'><a>
               <MenuItem>
                    <IconButton size="large" color="inherit">
                        <AlternateEmailOutlined />
                    </IconButton>
                    <Typography color="inherit">
                        Contact Me
                    </Typography>
                </MenuItem>
            </a></Link>
            
            <Link href='/donate'><a>
                <MenuItem>
                    <IconButton size="large" color="inherit">
                        <PaidOutlined />
                    </IconButton>
                    <Typography color="inherit">
                        Donate
                    </Typography>
                </MenuItem>
            </a></Link>

            <Link href='/about'><a>
                <MenuItem>
                    <IconButton size="large" color="inherit">
                        <InfoOutlined />
                    </IconButton>
                    <Typography color="inherit">
                        About This Project
                    </Typography>
                </MenuItem>
            </a></Link>

            <Link href='/shoppingcart'><a>
                <MenuItem>
                        <IconButton size="large" color="inherit">
                                { total_items === 0 ? ( 
                                    <ShoppingCartOutlined /> 
                                ) : ( 
                                    <Badge
                                        badgeContent={total_items} 
                                        color="primary">
                                        <ShoppingCartOutlined />
                                    </Badge> 
                                )}
                        </IconButton>
                        <Typography color="inherit">
                            Shopping Cart
                        </Typography>
                </MenuItem>
            </a></Link>
    </Menu>
  );

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#052469', padding: 1 }}>
            <Toolbar>
                <Image src="/BP_logo.png" alt="Blueprint Logo" width={52} height={52} />

                <Link href='/'><a>
                    <Typography
                        variant="h4"
                        noWrap
                        sx={{ paddingX: 2, paddingY: 1, fontFamily: 'Sacramento', display: { xs: 'none', sm: 'block' } }}
                    >
                        Johnny&apos;s
                    </Typography>
                </a></Link>

                <Box sx={{ flexGrow: 1 }} />
                
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Link href='/'><a>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <Home />
                        </IconButton>
                    </a></Link>  
                </Box>


        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href='/about'><a><IconButton size="large" color="inherit">
                <InfoOutlined />
                <Typography
                variant="overline"
                noWrap
                sx={{ mx: 1, display: { xs: 'none', sm: 'block' } }}
            >
                About
            </Typography>
            </IconButton></a></Link>

            <IconButton size="large" color="inherit" onClick={handleProfileMenuOpen}>
                <HelpOutline />
                <Typography
                variant="overline"
                noWrap
                sx={{ mx: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Help
                </Typography>
            </IconButton>

            <Link href='/shoppingcart'><a>
                <IconButton size="large" aria-label="show shopping cart count" color="inherit">
                    { total_items === 0 ? ( 
                        <ShoppingCartOutlined /> 
                    ) : ( 
                        <Badge
                            badgeContent={total_items} 
                            color="primary">
                            <ShoppingCartOutlined />
                        </Badge> 
                    )}
                </IconButton>
            </a></Link>
            
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </Box>

        </Toolbar>

      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
