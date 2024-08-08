import '@mantine/carousel/styles.css';
import { useEffect, useState } from 'react';
import { Progress, Image, Center, Loader, rem, Badge, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import axios from 'axios';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export default function TravelCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState<{ url: string; title: string; link: string }[]>([]);
  const [embla, setEmbla] = useState<any>(null); // Adjust Embla type as per Mantine documentation or typings
  const [loading, setLoading] = useState(true); // State to track loading state
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%E5%A8%9B%E6%A8%82'
        );
        const posts = response.data.posts;
        const fetchedImages = posts
          .map((post: any) => ({
            url: post.featured_image,
            slug: post.slug,
            title: post.title, // Retrieve title of the post
            link: post.URL,
          }))
          .filter((item: { url: string; title: string; link: string; slug: string }) => item.url && item.title && item.link && item.slug)
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

  const handleSlideClick = (slug: string) => {
    window.location.href = `/posts/${slug}`;
  };

  const slides = images.map((item, index) => (
    <Carousel.Slide
      key={index}
      onClick={() => handleSlideClick(item.slug)}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <div className="image-wrapper">
        <Image src={item.url} alt={`Image ${index}`} style={{ borderRadius: '5px' }} />
      </div>
      <div className="gradient-overlay"></div>
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '15px',
          right: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          color: 'white',
          textAlign: 'left',
          fontSize: '18px',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0.5, 0.5, 0.5, 0.6)',
        }}
      >
        <Badge color="#FF6031" variant="filled" size="lg" style={{ marginBottom: '10px' }}>
          最新
        </Badge>
        {isMobile ? null : item.title}
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
        padding-top: 150%; /* 4:3 Aspect Ratio */
      }

      .image-wrapper img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px; /* Ensure image has rounded corners */
      }

      .gradient-overlay {
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        border-radius: 0 0 5px 5px; /* Ensure gradient overlay has rounded corners */
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
        <Center>
        <Title order={3} size="h1" w={700} style={{ marginBottom: '20px', textAlign: 'center' }}>
            專題玩樂遊
        </Title>
      </Center>
      <Carousel
        withIndicators
        loop
        dragFree
        slideSize="33.333%"
        slideGap="md"
        nextControlIcon={<IconArrowRight style={{ width: rem(60), height: rem(60), color: '#FF6031' }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(60), height: rem(60), color: '#FF6031' }} />}
        height={1200} // Adjust the height as needed
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        {slides}
      </Carousel>
    </>
  );
}
