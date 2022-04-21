import { Box, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Discount: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Box borderRadius={2} bgcolor={theme => theme.palette.primary.light} py={0.25} px={1} display="inline-block">
    <Typography
      fontSize={18}
      fontWeight="bold"
      color={theme => theme.palette.primary.main}
    >
      {children}
    </Typography>
  </Box>
);
