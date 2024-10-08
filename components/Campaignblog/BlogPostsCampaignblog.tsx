import { Container, Title, Group, Badge, Text, SimpleGrid, Card } from '@mantine/core';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useMediaQuery } from '@mantine/hooks';

interface Post {
  title: string;
  link: string;
  featured_image: string;
  date: string;
  author: string;
  slug: string;
}

function truncateTitle(title: string, maxWords: number = 19): string {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return title;
}

export default function BlogPostsCampaignblog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%E9%A3%B2%E9%A3%9F"
        );
        const fetchedPosts = response.data.posts.map((post: any) => ({
          title: post.title,
          link: post.URL,
          slug: post.slug,
          featured_image: post.featured_image,
          date: post.date,
          author: post.author.name
        }));

        setPosts(fetchedPosts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const PostCard = ({ post }: { post: Post }) => (
    <Card shadow="sm" padding="lg" radius="md" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Card.Section style={{ position: 'relative', paddingTop: '56.25%' }}>
        <img
          src={post.featured_image}
          alt={post.title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Badge autoContrast color="#69FFB3">飲食</Badge>
      </Group>

      <Title order={3} style={{ marginTop: '10px', marginBottom: '10px', flexGrow: 1 }}>
        <a href={`/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
          {truncateTitle(post.title)}
        </a>
      </Title>
    </Card>
  );

  const getColumnCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Container fluid style={{ backgroundColor: '#E9E3D9', padding: '30px' }}>
      <Title order={2} mb="md" style={{ fontWeight: 800, color: 'black' }}>延伸閱讀 #Next Reading</Title>
      <SimpleGrid cols={getColumnCount()} spacing="lg">
        {posts.slice(0, getColumnCount()).map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </SimpleGrid>
    </Container>
  );
}