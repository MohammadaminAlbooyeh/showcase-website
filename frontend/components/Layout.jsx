import '../App.css';
import { NavBar } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';

// Add global styles for accessibility
const globalStyles = `
  :root {
    --focus-ring-color: #2196f3;
  }

  /* High contrast focus outline */
  *:focus {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  /* Skip link styles */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #fff;
    color: #000;
    padding: 8px;
    z-index: 100;
    transition: top 0.2s;
  }

  .skip-link:focus {
    top: 0;
  }

  /* Remove focus outline for mouse users */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Show focus outline for keyboard users */
  *:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
`;

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="App">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: 0,
          background: '#fff',
          color: '#000',
          padding: '8px',
          zIndex: 100,
          transition: 'top 0.2s',
          ':focus': {
            top: 0
          }
        }}
      >
        Skip to main content
      </a>

      <header role="banner">
        <NavBar />
      </header>

      <Box 
        component="main"
        id="main-content"
        tabIndex={-1}
        role="main"
        aria-label={`${router.pathname.substring(1) || 'Home'} page`}
        className="content"
        sx={{ 
          overflow: 'hidden',
          position: 'relative',
          outline: 'none'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={router.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Box>

      <footer role="contentinfo">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
