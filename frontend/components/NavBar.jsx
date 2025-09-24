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

  // Pre-fetch all routes for instant navigation
  React.useEffect(() => {
    pages.forEach(page => router.prefetch(page.href));
  }, []);

  return (
    <AppBar position="static" color="default" elevation={2} sx={{ mb: 2, background: 'var(--color-nav-bg)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile menu */}
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
                <Link 
                  key={page.href} 
                  href={page.href} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MenuItem onClick={handleCloseNavMenu} selected={router.pathname === page.href}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1 }}>
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: 2,
                    color: router.pathname === page.href ? 'var(--color-accent)' : 'var(--color-primary)',
                    display: 'block',
                    fontWeight: router.pathname === page.href ? 700 : 400,
                    backgroundColor: router.pathname === page.href ? 'rgba(249,200,70,0.08)' : 'transparent',
                    borderRadius: 2,
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: 'var(--color-secondary)',
                      color: 'var(--color-bg)',
                    },
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}