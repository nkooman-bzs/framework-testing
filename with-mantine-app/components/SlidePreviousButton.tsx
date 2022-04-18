import { Button, Image } from '@mantine/core';
import { useSwiper } from 'swiper/react';

const SlidePreviousButton = () => {
  const swiper = useSwiper();

  return (
    <Button
      sx={theme => ({
        height: 95,
        width: 95,
        backgroundColor: theme.colors.brand[0],
        borderRadius: 0,
        border: 0,
        '&:hover': {
          backgroundColor: theme.colors.brand[1]
        },
        '&:not(:disabled):active': {
          transform: 'none'
        }
      })}
      aria-label="Navigate to previous slide"
      onClick={() => swiper.slidePrev()}
    >
      <Image src="/icon-angle-left.svg" alt="Angle left" />
    </Button>
  );
};

export default SlidePreviousButton;
