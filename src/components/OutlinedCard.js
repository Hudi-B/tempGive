import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
    
export default function OutlinedCard({ data }) {
  return (
    <Box sx={{ minWidth: 275 }}>
        <Card key={data.id} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {data.name}
            </Typography>
            <Typography variant="h5" component="div">
              {data.hostname}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Location: {data.location}
            </Typography>
            <Typography variant="body2">
              Price: {data.price} Ft
              <br />
              Minimum nights: {data.minimum_nights}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/lodging/${data.id}`}>
                <Button size="small">View Lodging</Button>
            </Link>
          </CardActions>
        </Card>
    </Box>
  );
}
