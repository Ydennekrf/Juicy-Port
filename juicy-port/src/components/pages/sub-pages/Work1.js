import * as React from 'react';
import Box from '@mui/material/Box';

export default function Work1() {
  return (
    <div style={{ width: '100%' }}>
   <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 1,
    gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
  }}
>
  <Box sx={{ gridArea: 'header', bgcolor: '#2a2a1f98' }}>Title</Box>
  <Box sx={{ gridArea: 'main', bgcolor: '#675630ed' }}>blurb</Box>
  <Box sx={{ gridArea: 'sidebar', bgcolor: '#46462b98' }}>image</Box>
  <Box sx={{ gridArea: 'footer', bgcolor: '#2a2a1f98' }}>Links</Box>
</Box>
    </div>
  );
}