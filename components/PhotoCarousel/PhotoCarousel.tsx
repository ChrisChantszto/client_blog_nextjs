import '@mantine/carousel/styles.css';
import { useEffect, useState } from 'react';
import { Progress, Image, Loader } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import axios from 'axios';

export default function PhotoCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState<{ url: string; title: string }[]>([]);
  const [embla, setEmbla] = useState<any>(null); // Adjust Embla type as per Mantine documentation or typings
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%e5%84%aa%e6%83%a0%e6%b8%9b%e5%83%b9'
        );
        const posts = response.data.posts;
        const fetchedImages = posts
          .map((post: any) => ({
            url: post.featured_image,
            title: post.title, // Retrieve title of the post
          }))
          .filter((item: { url: string; title: string }) => item.url && item.title)
          .slice(0, 5); // Take the first 5 images

        setImages(fetchedImages);
        setLoading(false); // Update loading state once images are fetched
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false); // Update loading state in case of error
      }
    };

    fetchImages();
  }, []);

  const handleScroll = () => {
    if (embla) {
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
      setScrollProgress(progress * 100);
    }
  };

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  const slides = images.map((item, index) => (
    <Carousel.Slide key={index} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="image-wrapper">
        <Image src={item.url} alt={`Image ${index}`} />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '15px',
          right: '15px',
          color: 'white',
          fontSize: '29px',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0.5, 0.5, 0.5, 0.6)',
        }}
      >
        {item.title}
      </div>
    </Carousel.Slide>
  ));

  useEffect(() => {
    // This code will run only on the client side
    const styles = document.createElement('style');
    styles.innerHTML = `
      .image-wrapper {
        position: relative;
        width: 100%;
        padding-top: 75%; /* 4:3 Aspect Ratio */
      }

      .image-wrapper img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
    document.head.appendChild(styles);

    // Cleanup function to remove the style tag if component unmounts
    return () => {
      document.head.removeChild(styles);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  if (loading) {
    return <Loader />; // Display loader while images are being fetched
  }

  return (
    <>
      <Carousel
        loop
        dragFree
        slideSize="50%"
        slideGap="md"
        height={400} // Adjust the height as needed
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        {slides}
      </Carousel>
      <Progress value={scrollProgress} max={100} size="sm" mt="xl" mx="auto" />
    </>
  );
}
