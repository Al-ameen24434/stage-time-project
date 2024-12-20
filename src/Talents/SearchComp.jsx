import React, { useState } from 'react';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect } from 'react'
import "aos/dist/aos.css"; 
import AOS from "aos";

const SearchWithIcon = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle clear button click
  const handleClear = () => {
    setSearchQuery('');
  };
       useEffect(() => {
        AOS.init({ duration: 1000, once: true }); 
         }, []);

  return (
    <Box  data-aos="fade-right" data-aos-delay="600" sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingBottom: '20px' }}>
      <TextField
        type="search"
        placeholder="Search for answers"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: 'white' }}> {/* Search Icon Color */}
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear}>
                <ClearIcon sx={{ color: 'white' }} /> {/* Clear Icon Color */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            color: 'white', // Text color inside input
          },
        }}
        sx={{
          width: { xs: '100%', sm: '771px' }, // Responsive width
          background: 'rgba(255, 255, 255, 0.1)', // Light transparent white background
          backdropFilter: 'blur(8px)', // Apply blur effect for glass effect
          borderRadius: '8px', // Rounded corners
          padding: '5px 15px', // Padding inside the input field
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Remove outline border
          },
          '& input::placeholder': {
            color: 'white', 
            fontWeight: 'normal', 
            fontSize:'20px',
            opacity: 1, 
          },
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: add subtle shadow for depth
        }}
      />
    </Box>
  );
};

export default SearchWithIcon;
