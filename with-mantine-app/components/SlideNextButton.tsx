import { Button, Image } from '@mantine/core';
import { useSwiper } from 'swiper/react';

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <Button
      sx={theme => ({
        height: 95,
        width: 95,
        padding: 0,
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
      aria-label="Navigate to next slide"
      onClick={() => swiper.slideNext()}
    >
      <Image src="/icon-angle-right.svg" alt="Angle right" />
    </Button>
  );
};

export default SlideNextButton;
