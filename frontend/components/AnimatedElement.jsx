import { motion } from 'framer-motion';

const hoverVariants = {
  scale: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  rotate: {
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.5 }
  },
  bounce: {
    y: [0, -10, 0],
    transition: { duration: 0.5 }
  },
  glow: {
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    transition: { duration: 0.2 }
  }
};

const AnimatedElement = ({ 
  children, 
  effect = 'scale', 
  className, 
  style,
  ...props 
}) => {
  const variants = {
    initial: {},
    hover: hoverVariants[effect] || hoverVariants.scale
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={variants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;