import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import AnimatedProjectIcon from '../components/AnimatedProjectIcon';

export default function Projects() {
  const projects = [
  ];

  return (
    <Box sx={{ py: 4, px: 2 }}>
    
      <Typography variant="h1" component="h1" sx={{ mb: 4, textAlign: 'center', color: '#00ff73ff' }}>
        My Projects
      </Typography>
      
      <Grid container spacing={1} sx={{ maxWidth: '100%', margin: '0 auto', paddingX: 2 }}>
        {projects.map(project => (
          <Grid item xs={4} sm={4} md={4} key={project.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 2,
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(246, 59, 72, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(160, 240, 10, 0.2)',
                  borderColor: 'rgba(59, 246, 84, 0.3)',
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