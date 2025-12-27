
import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  alpha,
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
  Stack,
  Divider,
  TextField
} from '@mui/material';
import Timeline from '../components/Timeline';
import ProjectDemo from '../components/ProjectDemo';
import SkillsChart from '../components/SkillsChart';
import ProjectFilter from '../components/ProjectFilter';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AnimatedProjectIcon from '../components/AnimatedProjectIcon';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollFadeIn from '../components/ScrollFadeIn';

export default function Portfolio() {
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);

  // Handle parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      id: 5,
      title: 'Income and Expenses Tracker',
      description: 'Full-stack application for tracking personal finances. Features include expense categorization, budget planning, and detailed financial reports.',
      image: 'https://placehold.co/600x400/4FD1C5/FFFFFF?text=Income+Expenses',
      link: 'https://github.com/MohammadaminAlbooyeh/income_and_expense.git',
      demoUrl: 'https://income-expense-tracker-demo.vercel.app',
      sandboxId: 'income-expense-tracker-demo',
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

  // Project interaction state
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoOpen, setDemoOpen] = useState(false);

  // Project filtering state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags || []))];

  // Filter projects based on search and tags
  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = !searchTerm ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => project.tags?.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, selectedTags, projects]);

  const handleOpenDemo = (project) => {
    setSelectedProject(project);
    setDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoOpen(false);
  };

  return (
    <>
      <InteractiveBackground />
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 6,
          position: 'relative',
          zIndex: 1,
          '& .parallax-layer-1': {
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '& .parallax-layer-2': {
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '& .parallax-layer-3': {
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }
        }}
      >
      <ScrollFadeIn delay={100}>
        <Box mb={6} textAlign="center" className="parallax-layer-1">
          <Typography variant="h4" component="h1" gutterBottom>
            Professional Journey
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
            Explore my career path and growing expertise in software development
          </Typography>
          <Timeline />
        </Box>
      </ScrollFadeIn>

      <Divider sx={{ my: 8 }} />

      <ScrollFadeIn delay={200}>
        <Box mb={6} textAlign="center" className="parallax-layer-2">
          <Typography variant="h4" component="h2" gutterBottom>
            Technical Skills
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
            A comprehensive overview of my technical expertise and proficiency levels
          </Typography>
          <SkillsChart />
        </Box>
      </ScrollFadeIn>

      <Divider sx={{ my: 8 }} />

      <ScrollFadeIn delay={300}>
        <Box mb={6} className="parallax-layer-3">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              Featured Projects
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              A curated selection of my most impactful projects, showcasing my expertise in software development.
            </Typography>
          </Box>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search projects by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                clickable
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
                sx={{
                  backgroundColor: selectedTags.includes(tag)
                    ? 'var(--color-accent)'
                    : alpha('var(--color-accent)', 0.1),
                  color: selectedTags.includes(tag)
                    ? 'var(--color-bg)'
                    : 'var(--color-accent)',
                  '&:hover': {
                    backgroundColor: selectedTags.includes(tag)
                      ? alpha('var(--color-accent)', 0.8)
                      : alpha('var(--color-accent)', 0.2),
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <Fade 
                in={true} 
                timeout={500} 
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredId === project.id 
                    ? 'translateY(-12px) scale(1.02)'
                    : 'translateY(0) scale(1)',
                  boxShadow: hoveredId === project.id 
                    ? (theme) => `0 14px 28px ${alpha(theme.palette.primary.main, 0.25)}`
                    : theme.shadows[2],
                  '&:hover': {
                    '& .project-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    }
                  },
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Box sx={{ position: 'relative', height: 250, background: project.color + '11' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <AnimatedProjectIcon project={project} size="large" />
                  </Box>
                </Box>
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {project.demoUrl && (
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      onClick={() => handleOpenDemo(project)}
                      sx={{
                        bgcolor: alpha(project.color, 0.1),
                        color: project.color,
                        '&:hover': {
                          bgcolor: alpha(project.color, 0.2),
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Box sx={{ display: 'flex', gap: 1 }}>
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
                </Box>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>

      <ProjectDemo
        open={demoOpen}
        onClose={handleCloseDemo}
        project={selectedProject}
      />
        </Box>
      </ScrollFadeIn>
    </Container>
    </>
  );
}
