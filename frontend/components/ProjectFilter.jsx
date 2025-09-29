import React, { useState } from 'react';
import {
  Box,
  TextField,
  Chip,
  alpha,
} from '@mui/material';

const ProjectFilter = ({ allTags, onSearch, onTagsChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTagClick = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'var(--color-nav-bg)',
            '& fieldset': {
              borderColor: 'var(--color-primary)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-accent)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-accent)',
            },
          },
          '& .MuiInputBase-input': {
            color: 'var(--color-primary)',
          },
        }}
      />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => handleTagClick(tag)}
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
  );
};

export default ProjectFilter;