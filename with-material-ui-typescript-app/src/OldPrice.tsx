import { Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const OldPrice: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Typography fontSize={18} fontWeight="bold" sx={{ opacity: 0.5 }}>
    <s>{children}</s>
  </Typography>
);
