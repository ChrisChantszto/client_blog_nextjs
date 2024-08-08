import { Container, Title, Group, Badge, Text } from '@mantine/core';
import { useEffect, useState } from "react";
import { Carousel } from '@mantine/carousel';
import axios from 'axios';

import { useMediaQuery } from '@mantine/hooks';

interface Post {
  title: string;
  link: string;
  featured_image: string;
  date: string;
  author: string;
}

function truncateTitle(title: string, maxWords: number = 19): string {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return title;
}

export default function ShoppingCampaignblog() {
  const [posts, setPosts] = useState<Post[]>([]);

  const isMobile = useMediaQuery('(min-width: 56.25em)');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%E8%B3%BC%E7%89%A9"
        );
        const fetchedPosts = response.data.posts.map((post: any) => ({
          title: post.title,
          slug: post.slug,
          link: post.URL,
          featured_image: post.featured_image,
          date: post.date,
          author: post.author.name
        }));

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container fluid style={{ backgroundColor: '#E9E3D9', height: '500px' }}>
      <br />
      <Title order={2} px={30} style={{ fontWeight: 800, color: 'black' }}>人氣話題 #HOT TOPIC</Title>
      <br />
      <Carousel
        height={300}
        slideSize={isMobile ? "50%" : "100%"}
        slideGap="md"
        loop
        align="start"
      >
        {posts.map((post, index) => (
          <Carousel.Slide key={index}>
            <div style={{ display: 'flex', height: '100%', backgroundColor: 'transparent' }}>
              <div style={{ flex: '0 0 50%', height: '100%' }}>
                <img src={post.featured_image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px', backgroundColor: 'white' }}>
                <Group mb="xs">
                  <Badge autoContrast color="#FFBDF8">購物</Badge>
                </Group>
                {/* <Text size="sm" style={{ color: 'black' }} fw={500}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} / by {post.author}
                </Text> */}
                <Title order={3} style={{ marginTop: '10px', marginBottom: '10px' }}><a href={`/posts/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{truncateTitle(post.title)}</a></Title>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}