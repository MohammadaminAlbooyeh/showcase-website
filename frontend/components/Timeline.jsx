import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const timelineData = [
  {
    year: '2023',
    title: 'Senior Full Stack Developer',
    description: 'Led development of enterprise applications using React and Node.js',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#4CAF50'
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    description: 'Developed and maintained multiple web applications',
    skills: ['React', 'Express', 'MongoDB', 'Docker'],
    color: '#2196F3'
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    description: 'Specialized in building responsive user interfaces',
    skills: ['JavaScript', 'React', 'CSS', 'HTML'],
    color: '#9C27B0'
  }
  // Add more timeline entries as needed
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `${slideIn} 0.6s ease-out forwards`;
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={timelineRef}
      sx={{
        position: 'relative',
        py: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: { xs: '20px', md: '50%' },
          transform: { md: 'translateX(-50%)' },
          width: '2px',
          height: '100%',
          background: 'var(--color-primary)',
          opacity: 0.3,
        }
      }}
    >
      {timelineData.map((item, index) => (
        <Box
          key={item.year}
          className="timeline-item"
          sx={{
            opacity: 0,
            mb: 6,
            position: 'relative',
            '&:hover': {
              '& .timeline-content': {
                transform: 'scale(1.02)',
                boxShadow: (theme) => `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
              },
              '& .timeline-dot': {
                animation: `${pulse} 1s infinite`,
                background: item.color,
              }
            }
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ 
                textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                pr: { md: index % 2 === 0 ? 4 : 0 },
                pl: { md: index % 2 === 0 ? 0 : 4 }
              }}
            >
              <Box
                className="timeline-content"
                component={Paper}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  bgcolor: 'var(--color-nav-bg)',
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative',
                }}
              >
                <Typography 
                  variant="h6" 
                  color={item.color} 
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="var(--color-primary)"
                  sx={{ mb: 2, opacity: 0.9 }}
                >
                  {item.year}
                </Typography>
                <Typography 
                  color="var(--color-primary)" 
                  sx={{ mb: 2, opacity: 0.8 }}
                >
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {item.skills.map((skill) => (
                    <Typography
                      key={skill}
                      component="span"
                      sx={{
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                        bgcolor: alpha(item.color, 0.1),
                        color: item.color,
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Box
                className="timeline-dot"
                sx={{
                  position: 'absolute',
                  left: { xs: '20px', md: '50%' },
                  transform: { md: 'translateX(-50%)' },
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'var(--color-primary)',
                  border: '3px solid var(--color-nav-bg)',
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Timeline;