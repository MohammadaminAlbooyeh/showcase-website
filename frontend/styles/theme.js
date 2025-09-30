import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Mobile
      sm: 600,    // Tablet
      md: 960,    // Small laptop
      lg: 1280,   // Desktop
      xl: 1920,   // Large screens
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    },
    h2: {
      fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      marginBottom: 'clamp(0.75rem, 2.5vw, 1.25rem)',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
    },
    body1: {
      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
      lineHeight: 1.6,
      marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    },
    body2: {
      fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
      lineHeight: 1.5,
      marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
    },
    button: {
      fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 'clamp(1rem, 5vw, 3rem)',
          paddingRight: 'clamp(1rem, 5vw, 3rem)',
          '@media (max-width: 600px)': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '0.5rem 1.25rem',
          '@media (max-width: 600px)': {
            padding: '0.625rem 1rem',
            width: '100%',
          },
        },
        containedPrimary: {
          boxShadow: '0 2px 4px rgba(25, 118, 210, 0.25)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(25, 118, 210, 0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '@media (max-width: 600px)': {
            borderRadius: 8,
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            width: '100%',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          '@media (max-width: 600px)': {
            margin: '1rem',
            width: 'calc(100% - 2rem)',
            maxHeight: 'calc(100% - 2rem)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            padding: 8,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
  },
});

export default theme;