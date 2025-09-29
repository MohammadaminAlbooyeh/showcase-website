import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
  alpha,
  Tabs,
  Tab,
  Fade
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import PreviewIcon from '@mui/icons-material/Preview';
import { keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectDemo = ({ open, onClose, project }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'var(--color-nav-bg)',
          backgroundImage: 'none',
          borderRadius: 2,
          overflow: 'hidden',
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'var(--color-nav-bg)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: 2,
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'var(--color-primary)' }}>
          {project.title} - Live Demo
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ color: 'var(--color-primary)' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0, bgcolor: 'var(--color-nav-bg)' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="project demo tabs"
            sx={{
              '& .MuiTab-root': {
                color: 'var(--color-primary)',
                '&.Mui-selected': {
                  color: 'var(--color-accent)',
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'var(--color-accent)',
              }
            }}
          >
            <Tab 
              icon={<PreviewIcon />} 
              label="Live Preview" 
              sx={{ 
                textTransform: 'none',
                minHeight: 64,
                animation: `${fadeIn} 0.4s ease-out`
              }}
            />
            <Tab 
              icon={<CodeIcon />} 
              label="Code Sandbox" 
              sx={{ 
                textTransform: 'none',
                minHeight: 64,
                animation: `${fadeIn} 0.4s ease-out 0.1s`
              }}
            />
          </Tabs>
        </Box>
        <Box sx={{ height: 600, p: 0 }}>
          <Fade in={activeTab === 0} timeout={300}>
            <Box
              sx={{
                display: activeTab === 0 ? 'block' : 'none',
                height: '100%',
              }}
            >
              <iframe
                src={project.demoUrl}
                title={`${project.title} preview`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </Box>
          </Fade>
          <Fade in={activeTab === 1} timeout={300}>
            <Box
              sx={{
                display: activeTab === 1 ? 'block' : 'none',
                height: '100%',
              }}
            >
              <iframe
                src={`https://codesandbox.io/embed/${project.sandboxId}?hidenavigation=1&theme=dark`}
                title={`${project.title} code`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </Box>
          </Fade>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDemo;