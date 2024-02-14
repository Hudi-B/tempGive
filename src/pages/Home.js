import React, { useState, useEffect } from 'react';
import OutlinedCard from '../components/OutlinedCard';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

function Home() {
  const [lodgingData, setLodgingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://nodejs.sulla.hu/data/')
      .then(response => {
        setLodgingData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {
        isLoading ? (
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              m={3}
            >
                <CircularProgress />
            </Box>
        ) : (
          <Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={3}
              m={3}
            >
              {lodgingData.map((item) => (
                <Box key={item.id} width="30%">
                  <OutlinedCard data={item} />
                </Box>
              ))}
            </Box>
          </Box>
        )
      }
    </div>
  );
}

export default Home;
