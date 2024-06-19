import { useEffect, useState, CSSProperties } from "react";
import { Text, Title, Divider, Image, Stack, Button, Grid, Badge, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import axios from "axios";

interface Post {
  featured_image: string;
  title: string;
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
        const fetchedPosts = response.data.posts.slice(0, 4).map((post: any) => ({
          featured_image: post.featured_image,
          title: post.title,
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

  // Inline styles with media queries
  const styles: { [key: string]: CSSProperties } = {
    hideOnSmall: {
      display: 'none',
      // '@media (max-width: 600px)': {
      //   display: 'none',
      // },
    },
    banner: {
      position: 'sticky',
      top: '10px',
      marginTop: '1rem',
      width: '70%',
      height: 'auto',
    },
  };

  return (
    <>
      <Title fw={800} order={1} c="orange">SELECTED POST</Title>
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
            gap="lg"
          >
            {posts.map((post, index) => (
              <Grid key={index}>
                <Grid.Col span={4}>
                  <Image
                    radius="md"
                    h={200}
                    w="auto"
                    fit="contain"
                    src={post.featured_image}
                  />
                </Grid.Col>
                <Grid.Col
                  span={8}
                  style={styles.hideOnSmall}
                >
                  <Badge color="#FF6031">最新</Badge>
                  <Title order={5}>{new Date(post.date).toLocaleDateString()} / By {post.author.name}</Title>
                  <Title order={2}>{post.title}</Title>
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
      <Center>
        <Button variant="filled" color="#FF6031" radius="xl">
          <Text size="xl">更多文章</Text>
          <IconPlus />
        </Button>
      </Center>
    </>
  );
}
