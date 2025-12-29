import { Helmet } from 'react-helmet';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';

export default function Home() {
  const [show, setShow] = React.useState(false);
  
  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Showcase | Amin Albooyeh</title>
        <meta name="description" content="Amin Albooyeh - Experienced software developer in Java and Python (Django). Explore portfolio, projects, and resume." />
        <meta name="keywords" content="Amin Albooyeh, software developer, Java, Python, Django, portfolio, projects, resume" />
        <meta property="og:title" content="Showcase | Amin Albooyeh" />
        <meta property="og:description" content="Experienced software developer in Java and Python (Django). Explore portfolio, projects, and resume." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://your-domain.com/" />
        <link rel="canonical" href="https://your-domain.com/" />
      </Helmet>
      <Fade in={show} timeout={900}>
        <Paper 
          component="section"
          elevation={4} 
          sx={{ p: { xs: 2, md: 4 }, mt: 2, mb: 2, borderRadius: 4, background: 'rgba(35,37,36,0.95)' }}
          role="region"
          aria-label="Profile introduction"
        >
          <Box 
            component="article"
            display="flex" 
            flexDirection={{ xs: 'column', md: 'row' }} 
            alignItems="center" 
            justifyContent="center" 
            gap={4}
          >
            <Box component="figure" sx={{ margin: 0 }}>
              <img
                src="/profile.jpg"
                alt="Profile picture of Amin Albooyeh"
                style={{
                  width: 200,
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid var(--color-accent)',
                  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.3)',
                  margin: '0 auto',
                  display: 'block',
                  transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)',
                }}
              />
            </Box>
            <Box 
              component="section"
              className="home-text-content" 
              textAlign={{ xs: 'center', md: 'left' }}
              role="region"
              aria-label="Introduction text"
            >
              <Typography variant="h3" component="h1" color="var(--color-accent)" fontWeight={700} gutterBottom sx={{ letterSpacing: '.05em' }}>
                Welcome!
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </>
  );
}
