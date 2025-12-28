import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import AnimatedProjectIcon from '../components/AnimatedProjectIcon';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SnapCinema',
      description: 'A platform for browsing and discovering movies, with detailed information and user reviews.',
      image: 'https://placehold.co/400x250/FF7676/FFFFFF?text=SnapCinema',
      link: '#',
      color: '#FF7676',
    },
    {
      id: 2,
      title: 'SmartLibrary',
      description: 'An application for managing library books, users, and borrowing history.',
      image: 'https://placehold.co/400x250/63B3ED/FFFFFF?text=SmartLibrary',
      link: '#',
      color: '#63B3ED',
    },
    {
      id: 3,
      title: 'Hotel Booking App',
      description: 'A comprehensive system for searching, booking, and managing hotel reservations.',
      image: 'https://placehold.co/400x250/68D391/FFFFFF?text=Hotel+Booking',
      link: '#',
      color: '#68D391',
    },
    {
      id: 4,
      title: 'MyEShop',
      description: 'An e-commerce storefront for selling various products, including shopping cart and order processing.',
      image: 'https://placehold.co/400x250/F6AD55/333333?text=MyEShop',
      link: '#',
      color: '#F6AD55',
    },
    {
      id: 5,
      title: 'Income and Expenses Tracker',
      description: 'A personal finance application to track income and expenses, with categorization and reporting features.',
      image: 'https://placehold.co/400x250/4FD1C5/333333?text=Income+Expenses',
      link: '#',
      color: '#4FD1C5',
    },
    {
      id: 6,
      title: 'Algorithm Lab',
      description: 'A collection of implemented algorithms and data structures for educational purposes and performance testing.',
      image: 'https://placehold.co/400x250/805AD5/FFFFFF?text=Algorithm+Lab',
      link: '#',
      color: '#805AD5',
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      description: 'A dynamic dashboard displaying current weather conditions and forecasts for multiple locations.',
      image: 'https://placehold.co/400x250/4299E1/FFFFFF?text=Weather+Dashboard',
      link: '#',
      color: '#4299E1',
    },
    {
      id: 8,
      title: 'To Do List',
      description: 'A simple and intuitive application for managing daily tasks and to-do items.',
      image: 'https://placehold.co/400x250/FBD38D/333333?text=To+Do+List',
      link: '#',
      color: '#FBD38D',
    },
  ];

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Typography variant="h1" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
        My Projects
      </Typography>
      
      <Grid container spacing={1} sx={{ maxWidth: '100%' }}>
        {projects.map(project => (
          <Grid item xs={12} md={4} key={project.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 2,
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              <Box
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                sx={{ cursor: 'pointer', p: 2 }}
              >
                <AnimatedProjectIcon project={project} size="medium" />
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    color: project.color,
                    mb: 1,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}