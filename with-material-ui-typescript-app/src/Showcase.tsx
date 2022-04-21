import { Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';

const images = [
  {
    image: '/images/image-product-1.jpg',
    thumbnail: '/images/image-product-1-thumbnail.jpg'
  },
  {
    image: '/images/image-product-2.jpg',
    thumbnail: '/images/image-product-2-thumbnail.jpg'
  },
  {
    image: '/images/image-product-3.jpg',
    thumbnail: '/images/image-product-3-thumbnail.jpg'
  },
  {
    image: '/images/image-product-4.jpg',
    thumbnail: '/images/image-product-4-thumbnail.jpg'
  }
];

export const Showcase: FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].image);

  return (
    <Stack gap={2}>
      <Box borderRadius={5} display="flex" overflow="hidden"><Image src={selectedImage} alt="" height={600} width={600} /></Box>
      <Stack direction="row" gap={2} justifyContent="space-between">
        {images.map(({ thumbnail, image }) => (
          <Button
            sx={ theme => ({
              borderRadius: 3,
              display: 'flex',
              overflow: 'hidden',
              padding: 0,
              border: `2px solid ${image === selectedImage ? theme.palette.primary.main : 'transparent'}`, 
            })}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={thumbnail}
              alt=""
              key={thumbnail}
              height={125}
              width={125}
            />
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
