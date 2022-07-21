import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const card = (
  <React.Fragment>
    <CardContent>
    <input type="text" placeholder="email"></input>
    </CardContent>
    <CardActions>
      <Button size="extra-small">Submit</Button>
    </CardActions>
  </React.Fragment>
);

export default function Contact() {
  return (
    <Box className="contactBox" sx={{ gridArea:'main', minWidth: 275 }}>
      <Card sx={{ bgcolor:'#281b13a7' }} variant="outlined">{card}</Card>
    </Box>
  );
}
