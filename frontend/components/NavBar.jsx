
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contactus' },
];

export default function NavBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="default" elevation={2} sx={{ mb: 2, background: 'var(--color-nav-bg)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo or Brand */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '.1rem',
            }}
          >
            Amin
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.href} onClick={handleCloseNavMenu} selected={router.pathname === page.href}>
                  <Typography component={Link} href={page.href} sx={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '.1rem',
            }}
          >
            Amin
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.href}
                onClick={() => {
                  handleCloseNavMenu();
                  if (router.pathname !== page.href) {
                    router.push(page.href);
                  }
                }}
                sx={{
                  my: 2,
                  color: router.pathname === page.href ? 'var(--color-accent)' : 'var(--color-primary)',
                  display: 'block',
                  fontWeight: router.pathname === page.href ? 700 : 400,
                  backgroundColor: router.pathname === page.href ? 'rgba(249,200,70,0.08)' : 'transparent',
                  borderRadius: 2,
                  mx: 1,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'var(--color-secondary)',
                    color: 'var(--color-bg)',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
