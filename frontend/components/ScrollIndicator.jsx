import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const ScrollIndicator = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const checkScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        transformOrigin: '0%',
        scaleX,
        zIndex: theme.zIndex.appBar + 1,
      }}
    />
  );
};

export default ScrollIndicator;