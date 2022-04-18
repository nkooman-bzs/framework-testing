import { Anchor, Box, Image } from '@mantine/core';

const Navigation = () => (
  <Box
    component="nav"
    sx={theme => ({
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 32,
      color: theme.colors.brand[3],
      zIndex: 1
    })}
  >
    <Box
      component="ul"
      sx={theme => ({
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'lowercase',
        gap: 64,
        a: {
          color: theme.colors.brand[3],
          fontWeight: 600,
          position: 'relative',
          '&:hover':{
            textDecoration: 'none',
            '&::before': {
            content: '""',
            width: '50%',
            position: 'absolute',
            height: 2,
            backgroundColor: theme.colors.brand[3],
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        }
      })}
    >
      <li>
        <Anchor href="">
          <Image src="/logo.svg" alt="Room logo" height={18} />
        </Anchor>
      </li>
      <li>
        <Anchor href="">Home</Anchor>
      </li>
      <li>
        <Anchor href="">Shop</Anchor>
      </li>
      <li>
        <Anchor href="">About</Anchor>
      </li>
      <li>
        <Anchor href="">Contact</Anchor>
      </li>
    </Box>
  </Box>
);

export default Navigation;
