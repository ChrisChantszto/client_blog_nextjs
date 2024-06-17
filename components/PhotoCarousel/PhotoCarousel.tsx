import '@mantine/carousel/styles.css';
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress, Image } from '@mantine/core';
import axios from 'axios';

export default function PhotoCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/'
        );
        const posts = response.data.posts;
        const fetchedImages = posts
          .map((post: { featured_image: string }) => post.featured_image)
          .filter((img: string | null) => img !== null)
          .slice(0, 5); // Take the first 5 images

        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  const slides = images.map((url) => (
    <Carousel.Slide key={url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={400} // Adjust the height as needed
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        {slides}
      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}
