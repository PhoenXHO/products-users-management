import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';

const pages = ['Products'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
	return (
		<AppBar position="fixed">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 0 }}>
						<Button
							sx={{ my: 2, color: 'white', display: 'block' }}
							href="/products"
						>
							Products
						</Button>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
