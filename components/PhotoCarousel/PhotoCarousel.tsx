import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { useEffect, useState } from 'react';
import { Image, Loader, Badge } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import axios from 'axios';
import { useMediaQuery } from '@mantine/hooks';

export default function PhotoCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [images, setImages] = useState<{ url: string; title: string; id: number; slug: string }[]>([]);
  const [embla, setEmbla] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/sismapblog.wpcomstaging.com/posts'
        );
        const posts = response.data.posts;
        const fetchedImages = posts
          .map((post: any) => ({
            url: post.featured_image,
            title: post.title,
            id: post.ID,
            slug: post.slug
          }))
          .filter((item: { url: string; title: string; id: number; slug: string }) => item.url && item.title && item.id && item.slug)
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
        cursor: 'pointer',
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
          fontSize: '29px',
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
        border-radius: 5px;
      }

      .gradient-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        border-radius: 0 0 5px 5px;
      }
    `;
    document.head.appendChild(styles);

    return () => {
      document.head.removeChild(styles);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Carousel
      loop
      dragFree
      slideSize="50%"
      slideGap="md"
      height={400}
      getEmblaApi={setEmbla}
      initialSlide={2}
    >
      {slides}
    </Carousel>
  );
}