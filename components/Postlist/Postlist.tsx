import { useEffect, useState, CSSProperties } from "react";
import { Text, Title, Divider, Image, Stack, Button, Grid, Badge, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import axios from "axios";

interface Post {
  featured_image: string;
  title: string;
  link: string;  // Added link property
  author: {
    name: string;
  };
  date: string;
}

export default function Postlist() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/'
        );
        const fetchedPosts = response.data.posts.slice(0, 3).map((post: any) => ({
          featured_image: post.featured_image,
          title: post.title,
          link: post.URL,  // Extract link from the API response
          author: {
            name: post.author.name
          },
          date: post.date,
        })) as Post[]; // Type assertion to ensure TypeScript understands this is an array of Post objects

        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Inline styles
  const styles: { [key: string]: CSSProperties } = {
    container: {
      backgroundColor: '#F5F5F5',
      padding: '1rem',
      minHeight: '100vh', // Ensures the container fills the viewport height
    },
    banner: {
      position: 'sticky',
      top: '10px',
      marginTop: '1rem',
      width: '70%',
      height: 'auto',
      backgroundColor: '#F5F5F5',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      paddingTop: '56.25%', // 16:9 Aspect Ratio (adjust as needed)
      overflow: 'hidden',
      backgroundColor: '#F5F5F5',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundColor: '#F5F5F5',
    },
    postTitle: {
      backgroundColor: '#F5F5F5', // Ensure consistent background color for titles
      marginBottom: '0.5rem', // Adjust spacing as needed
    },
  };

  return (
    <div style={styles.container}>
      <Title fw={800} order={1} c="#FF6031">SELECTED POST</Title>
      <Title fw={800} order={2}>精選文章</Title>
      <br />
      <Divider size="sm" />
      <br />
      <Grid>
        <Grid.Col span={10}>
          <Stack
            h={1000}
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="flex-start"
            style={{ backgroundColor: '#F5F5F5' }}
            gap="lg"
          >
            {posts.map((post, index) => (
              <Grid key={index}>
                <Grid.Col span={6}>
                  <div style={{ ...styles.imageContainer, paddingTop: '56.25%' }}>
                    <Image
                      radius="md"
                      src={post.featured_image}
                      alt={post.title}
                      style={styles.image}
                    />
                  </div>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Badge color="#FF6031">最新</Badge>
                  <Title style={styles.postTitle} order={5}>{new Date(post.date).toLocaleDateString()}</Title>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Title style={styles.postTitle} order={2}>{post.title}</Title>
                  </a>
                </Grid.Col>
              </Grid>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={2}>
          <div style={styles.banner}>
            <Image
              radius="md"
              src="https://via.placeholder.com/200x400.png?text=Banner"
              alt="Banner"
              fit="contain"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Grid.Col>
      </Grid>

      <Center style={{ marginTop: '1rem' }}>
        <Button variant="filled" color="#FF6031" radius="xl">
          <Text size="xl">更多文章</Text>
          <IconPlus />
        </Button>
      </Center>
    </div>
  );
}
