import Image from 'next/image'
import { Box, Typography } from '@mui/material';
import { FacebookRounded, GitHub, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
			<Box sx={{  
                display: 'flex', 
                justifyContent: 'space-between',
				flexDirection: 'row',
				paddingX: 3,
				paddingY: 1,
            }}>

				<Box>
					<Typography variant='body1' fontWeight={700} sx={{display: {xs: 'none', sm: 'flex' }}}>
						Social Media Profiles
					</Typography>
					<Box sx={{ color: '#052469', display: 'flex', justifyContent: 'space-around' }}>
						<a href='https://facebook.co/bivensjeremy' target='_blank' rel='noopener noreferrer'>
							<FacebookRounded />
						</a>

						<a href='http://twitter.com/_bivens' target='_blank' rel='noopener noreferrer'>
							<Twitter />
						</a>
						
						<a href='http://instagram.com/bivensjeremy' target='_blank' rel='noopener noreferrer'>
							<Instagram />
						</a>
						
						<a href='http://github.com/bivensjeremy' target='_blank' rel='noopener noreferrer'>
							<GitHub />
						</a>
					</Box>
				</Box>

				<Box sx={{ marginY: 'auto' }}>
					
					<a href='https://bivensblueprint.com' target='_blank' rel='noopener noreferrer'>
						<Typography sx={{display: {xs: 'none', sm: 'flex' }}}>
							Designed for 
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Image src="/BP_logo.png" alt="Blueprint Logo" width={28} height={28} layout='intrinsic' />
						</Box>
					</a>
				</Box>

				<Box sx={{ marginY: 'auto', display: {xs: 'none', sm: 'flex' }}}>
					&copy; {new Date().getFullYear()} Bivens Blueprint, LLC
				</Box>

				<Box sx={{display: {xs: 'flex', sm: 'none' }}}>
					&copy; {new Date().getFullYear()}
				</Box>
			</Box>
      </footer>
    );
}

export default Footer;