import '@mantine/carousel/styles.css';
import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Progress, Image, Loader } from '@mantine/core';
import axios from 'axios';
import { useMediaQuery } from '@mantine/hooks';

export default function JetsoCard() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState<{ url: string; title: string; link: string; slug: string }[]>([]);
  const [embla, setEmbla] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%E5%84%AA%E6%83%A0%E6%B8%9B%E5%83%B9'
        );
        const posts = response.data.posts;
        const fetchedImages = posts
          .map((post: any) => ({
            url: post.featured_image,
            title: post.title,
            link: post.URL,
            slug: post.slug
          }))
          .filter((item: { url: string; title: string; link: string; slug: string}) => item.url && item.title && item.link && item.slug)
          .slice(0, 5);

        setImages(fetchedImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
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

  const handleSlideClick = (slug: string) => {
    window.location.href = `/${slug}`;
  };

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  const slides = images.map((item, index) => (
    <Carousel.Slide
      key={index}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => handleSlideClick(item.slug)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '75%',
        }}
      >
        <Image
          src={item.url}
          alt={`Image ${index}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '58px',
          left: '15px',
          right: '15px',
          color: 'white',
          fontSize: isMobile ? '22px' : '22px',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0.5, 0.5, 0.5, 0.6)',
          cursor: 'pointer',
        }}
        onClick={() => handleSlideClick(item.slug)}
      >
        {item.title}
      </div>
    </Carousel.Slide>
  ));

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Carousel
        dragFree
        slideSize={isMobile ? "100%" : "30%"}
        slideGap={isMobile ? 0 : "md"}
        withIndicators
        height={350}
        getEmblaApi={setEmbla}
        loop
        initialSlide={isMobile ? 0 : 2}
      >
        {slides}
      </Carousel>
    </>
  );
}