import * as React from 'react';
import Box from '@mui/material/Box';
import grocery from './screenshots/grocery.png';

export default function Work3() {
  return (
    <div className="workBox" style={{ width: '100%' }}>
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
  <Box id="box1" sx={{ gridArea: 'header', bgcolor: '#2a2a1f98' }}><br/>.Zelda Tra.vel App.</Box>
  <Box id='box2' sx={{ gridArea: 'main', bgcolor: '#675630ed' }}><img className='workImage' src={grocery} alt='grocery app'/></Box>
  <Box id="box3" sx={{ gridArea: 'sidebar', bgcolor: '#46462b98' }}><br/>Role: <span className="blurbFont">Routes,Models,Database</span><br/>Tech: <span  className="blurbFont">SQL,Node,Express,Twillio</span><br/><br/>Scope: <span className="blurbFont">A full stack app that<br/>allows the user to select<br/>dishes for dinner and receive<br/>a text messege with a compiled<br/>grocery list</span></Box>
  <Box id="box4" sx={{ gridArea: 'footer', bgcolor: '#2a2a1f98' }}><a href="https://just-acorn.herokuapp.com/"><br/>Deployed App</a></Box>
</Box>
    </div>
  );
}