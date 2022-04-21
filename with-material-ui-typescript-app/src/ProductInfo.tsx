import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Discount } from './Discount';
import { OldPrice } from './OldPrice';
import { Price } from './Price';

export const ProductInfo: FC = () => (
  <Box>
    <Typography variant="subtitle1">Sneaker Company</Typography>
    <Typography variant="h1">Fall Limited Edition Sneakers</Typography>
    <Typography variant="body1">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </Typography>
    <Stack direction="row" spacing={2} alignItems="center">
      <Price>$125.00</Price>
      <Discount>50%</Discount>
    </Stack>
    <OldPrice>$250.00</OldPrice>
  </Box>
);
