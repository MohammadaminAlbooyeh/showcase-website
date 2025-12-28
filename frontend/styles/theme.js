import { createTheme, alpha } from '@mui/material/styles';

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
    mode: 'dark',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#1e40af',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#000000',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#047857',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#06b6d4',
      light: '#22d3ee',
      dark: '#0891b2',
    },
    divider: alpha('#cbd5e1', 0.1),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      background: 'linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
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
      color: '#cbd5e1',
    },
    body2: {
      fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
      lineHeight: 1.5,
      marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
      color: '#94a3b8',
    },
    button: {
      fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          backgroundAttachment: 'fixed',
        },
      },
    },
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
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '@media (max-width: 600px)': {
            padding: '0.625rem 1rem',
            width: '100%',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: alpha('#3b82f6', 0.5),
          color: '#3b82f6',
          '&:hover': {
            borderColor: '#3b82f6',
            backgroundColor: alpha('#3b82f6', 0.08),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${alpha('#3b82f6', 0.1)}`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '@media (max-width: 600px)': {
            borderRadius: 12,
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
            borderColor: alpha('#3b82f6', 0.3),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: alpha('#3b82f6', 0.2),
            transition: 'all 0.3s ease-in-out',
          },
          '&:hover fieldset': {
            borderColor: alpha('#3b82f6', 0.4),
          },
          '&.Mui-focused fieldset': {
            borderColor: '#3b82f6',
            boxShadow: `0 0 0 3px ${alpha('#3b82f6', 0.1)}`,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#cbd5e1',
            '&.Mui-focused': {
              color: '#3b82f6',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#3b82f6', 0.15),
          color: '#3b82f6',
          border: `1px solid ${alpha('#3b82f6', 0.3)}`,
          '&:hover': {
            backgroundColor: alpha('#3b82f6', 0.25),
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(30, 41, 59, 0.6)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${alpha('#3b82f6', 0.1)}`,
        },
      },
    },
  },
});

export default theme;