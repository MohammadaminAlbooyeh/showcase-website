import React from 'react';
import { Box, keyframes } from '@mui/material';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MovieIcon from '@mui/icons-material/Movie';
import HotelIcon from '@mui/icons-material/Hotel';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SchoolIcon from '@mui/icons-material/School';
import CloudIcon from '@mui/icons-material/Cloud';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const shine = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 300px;
  }
`;

export default function AnimatedProjectIcon({ project, size = 'large' }) {
  const getIcon = (title) => {
    const titles = {
      'MyEShop': ShoppingCartIcon,
      'SnapCinema': MovieIcon,
      'Hotel Booking App': HotelIcon,
      'Income and Expenses Tracker': AccountBalanceWalletIcon,
      'To Do List': TaskAltIcon,
      'Algorithm Lab': SchoolIcon,
      'Weather Dashboard': CloudIcon,
      'SmartLibrary': MenuBookIcon,
    };
    
    const Icon = titles[title] || ShoppingCartIcon;
    return Icon;
  };

  const IconComponent = getIcon(project.title);

  return (
    <Box
      sx={{
        position: 'relative',
        width: size === 'large' ? '180px' : '120px',
        height: size === 'large' ? '110px' : '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '18px',
        background: project.color,
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          animation: `${shine} 2s infinite`,
        },
        '&:hover': {
          '& .icon-button': {
            animation: `${float} 2s infinite ease-in-out`,
          },
          '& .icon': {
            animation: `${pulse} 2s infinite ease-in-out`,
          },
        },
      }}
    >
      <IconButton 
        className="icon-button"
        sx={{ 
          color: 'rgba(255,255,255,0.9)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'transparent',
          },
        }}
      >
        <IconComponent 
          className="icon"
          sx={{ 
            fontSize: size === 'large' ? '3rem' : '2rem',
            filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))',
          }} 
        />
      </IconButton>
    </Box>
  );
}