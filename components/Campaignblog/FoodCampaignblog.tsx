import { Container, Title, Group, Card, Image, Button, Badge, Text } from '@mantine/core';
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

export default function FoodCampaignBlog() {
  // Use the Post type for the state variable
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%E9%A3%B2%E9%A3%9F"
        );
        const fetchedPosts = response.data.posts.map((post: any) => ({
          title: post.title,
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
    <Container fluid style={{ backgroundColor: '#E9E3D9' }}>
      <br />
      <Title order={2} px={30} style={{ fontWeight: 800, color: 'black' }}>人氣話題 #HOT TOPIC</Title>
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
            <Card padding="xl" component='a' target="_blank" radius="md">
              <Card.Section component="a" href={post.link} target="_blank">
                <Image src={post.featured_image} height={300} alt={post.title} />
              </Card.Section>
              
              <Group mt="md" mb="xs">
                <Badge color="#FF6031">最新</Badge>
              </Group>
              <Text size="sg" style={{ color: 'black' }} fw={500}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} / by {post.author}
              </Text>
              <Title order={3}>{truncateTitle(post.title)}</Title>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}