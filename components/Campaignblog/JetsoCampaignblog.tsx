import { Container, Title, Group, Card, Image, Button, Badge, Divider, Text, Box } from '@mantine/core';
import { useEffect, useState } from "react";
import { Carousel } from '@mantine/carousel';
import axios from 'axios';

// Define a type for the post object
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

export default function JetsoCampaignblog() {
  // Use the Post type for the state variable
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%e5%84%aa%e6%83%a0%e6%b8%9b%e5%83%b9"
        );
        const fetchedPosts = response.data.posts.map((post: any) => ({
          title: post.title,
          link: post.URL,
          slug: post.slug,
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
    <Container fluid style={{ backgroundColor: '#F2EFEA' }}>
      <br />
      <Group justify="space-between">
        <Title order={2} px={30} style={{ fontWeight: 800, color: 'black' }}>會員獨家優惠</Title>
        <Group gap="xs">
          <Text>查看更多</Text>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#FF6031" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Group>
      </Group>
      <Divider my="md" />
      <br />
      <Carousel
        height={600}
        slideSize={{ base: '100%', sm: '50%', md: '23%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        align="start"
      >
        {posts.map((post, index) => (
          <Carousel.Slide key={index}>
            <Card padding="xl" component='a' target="_blank" radius="md" style={{ 
                height: '500px', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
              <Card.Section component="a" href={`/${post.slug}`} target="_blank">
                <Image src={post.featured_image} height={300} alt={post.title} />
              </Card.Section>
              
              <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Group mt="md" mb="xs">
                  <Badge color="#FFF067" autoContrast>優惠減價</Badge>
                </Group>
                <Title 
                  order={3} 
                  style={{ 
                    flexGrow: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {post.title}
                </Title>
              </Box>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}