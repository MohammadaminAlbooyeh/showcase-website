import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
    }}
  >
    <CircularProgress />
  </Box>
);

export const lazyLoad = (importFunc) => {
  return dynamic(() => importFunc, {
    loading: LoadingFallback,
    suspense: true,
  });
};

export const LazyComponent = ({ children }) => {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
};