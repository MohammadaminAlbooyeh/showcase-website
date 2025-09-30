import { Box, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <Box sx={{ width: '100%', mb: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Skeleton variant="rectangular" height={200} sx={{ mb: 1 }} />
          <Skeleton variant="text" height={32} sx={{ mb: 1 }} />
          <Skeleton variant="text" height={20} width="80%" />
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Skeleton variant="rounded" width={60} height={24} />
            <Skeleton variant="rounded" width={60} height={24} />
            <Skeleton variant="rounded" width={60} height={24} />
          </Box>
        </motion.div>
      </Box>
    );
  }

  return null;
};

export default SkeletonLoader;