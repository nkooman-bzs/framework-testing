import { Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Price: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Typography fontSize={35} fontWeight="bold">
    {children}
  </Typography>
);
