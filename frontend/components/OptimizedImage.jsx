import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  style,
  objectFit = 'cover',
  quality = 75,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
  }, [src]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        height: height,
        overflow: 'hidden',
        borderRadius: 'inherit',
      }}
    >
      {isLoading && !error && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          ...style,
          objectFit,
          opacity: isLoading || error ? 0 : 1,
          transition: 'opacity 0.2s ease-in-out',
        }}
        quality={quality}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        loading={priority ? 'eager' : 'lazy'}
      />
      {error && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.200',
            color: 'text.secondary',
            fontSize: '0.875rem',
          }}
        >
          Failed to load image
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImage;