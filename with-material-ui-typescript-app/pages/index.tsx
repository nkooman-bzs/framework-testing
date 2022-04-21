import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Navigation } from '../src/Navigation';
import { Showcase } from '../src/Showcase';
import { Grid } from '@mui/material';
import { ProductInfo } from '../src/ProductInfo';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box py={10}>
        <Navigation />
        <Grid container spacing={20}>
          <Grid item xs={12} md={6}><Showcase /></Grid>
          <Grid item xs={12} md={6}><ProductInfo /></Grid>
          
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;