
import * as React from 'react';
import { useState } from 'react';
import { 
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  IconButton,
  Fade,
  Grid,
  Typography,
  Container,
  useTheme,
  Stack
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Portfolio() {
  const selectedProjects = [
    {
      id: 5,
      title: 'Income and Expenses Tracker',
      description: 'Full-stack application for tracking personal finances. Features include expense categorization, budget planning, and detailed financial reports.',
      image: 'https://placehold.co/600x400/4FD1C5/FFFFFF?text=Income+Expenses',
      link: 'https://github.com/MohammadaminAlbooyeh/income_and_expense.git',
      tags: ['Django', 'React', 'Docker', 'REST API', 'SQLite'],
      color: '#4FD1C5',
      features: ['Real-time tracking', 'Category management', 'Financial reports', 'Docker deployment']
    },
    {
      id: 8,
      title: 'To Do List',
      description: 'A modern task management application with intuitive UI and powerful organization features.',
      image: 'https://placehold.co/600x400/FBD38D/333333?text=To+Do+List',
      link: 'https://github.com/MohammadaminAlbooyeh/to_do_list.git',
      tags: ['React', 'Material UI', 'Local Storage'],
      color: '#FBD38D',
      features: ['Task prioritization', 'Categories', 'Due dates', 'Progress tracking']
    },
    {
      id: 1,
      title: 'SnapCinema',
      description: 'Modern movie discovery platform with comprehensive movie information and user review system.',
      image: 'https://placehold.co/600x400/FF7676/FFFFFF?text=SnapCinema',
      link: 'https://github.com/MohammadaminAlbooyeh/SnapCinema.git',
      tags: ['React', 'Movie API', 'User Reviews'],
      color: '#FF7676',
      features: ['Movie search', 'User ratings', 'Reviews', 'Watchlist']
    },
    {
      id: 3,
      title: 'Hotel Booking App',
      description: 'Comprehensive hotel reservation system with real-time availability and booking management.',
      image: 'https://placehold.co/600x400/68D391/FFFFFF?text=Hotel+Booking',
      link: 'https://github.com/MohammadaminAlbooyeh/hotel_booking_app.git',
      tags: ['Django', 'PostgreSQL', 'JWT Auth'],
      color: '#68D391',
      features: ['Room booking', 'Payment processing', 'User profiles', 'Admin dashboard']
    },
    {
      id: 4,
      title: 'MyEShop',
      description: 'Full-featured e-commerce platform with product management and secure payment processing.',
      image: 'https://placehold.co/600x400/F6AD55/333333?text=MyEShop',
      link: 'https://github.com/MohammadaminAlbooyeh/MyEshop.git',
      tags: ['React', 'Node.js', 'MongoDB'],
      color: '#F6AD55',
      features: ['Shopping cart', 'User accounts', 'Product search', 'Order tracking']
    },
  ];

  const theme = useTheme();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box mb={6} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="h6" sx={{ color: 'white' }}>
          A curated selection of my most impactful projects, showcasing my expertise in software development.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {selectedProjects.map((project) => (
          <Grid item xs={12} sm={6} md={6} key={project.id}>
            <Fade in timeout={500}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderBottom: `4px solid ${project.color}`,
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  
                  <Box mt={2} mb={3}>
                    <Grid container spacing={1}>
                      {project.tags.map((tag, index) => (
                        <Grid item key={index}>
                          <Chip
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: `${project.color}22`,
                              color: project.color,
                              fontWeight: 500,
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                      Key Features:
                    </Typography>
                    {project.features.map((feature, index) => (
                      <Box key={index} display="flex" alignItems="center" mb={0.5}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 16, mr: 1, color: project.color }} />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>

                <Box
                  sx={{
                    p: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 1,
                  }}
                >
                  <IconButton
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: project.color,
                      '&:hover': { backgroundColor: `${project.color}22` },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: project.color,
                      '&:hover': { backgroundColor: `${project.color}22` },
                    }}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </Box>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
