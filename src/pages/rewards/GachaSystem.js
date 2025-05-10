import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';
import gachaItems from '../../../data/gatcha-items.json';

const GachaSystem = () => {
  const [currentItem, setCurrentItem] = useState(null);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * gachaItems.length);
    setCurrentItem(gachaItems[randomIndex]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gacha Rewards
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={getRandomItem}
            sx={{ mb: 3 }}
          >
            Get Reward
          </Button>
        </Grid>
        {currentItem && (
          <Grid item xs={12}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                {currentItem.name}
              </Typography>
              <Typography variant="body1">
                {currentItem.description}
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default GachaSystem; 