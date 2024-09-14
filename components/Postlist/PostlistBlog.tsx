import React, { useEffect, useState, CSSProperties } from "react";
import { Text, Title, Divider, Image, Stack, Button, Grid, Container, Box, Badge, Center, Overlay } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { useMediaQuery } from "@mantine/hooks";
import { useImageVersion } from './useImageVersion';

interface Post {
  featured_image: string;
  title: string;
  link: string;  // Added link property
  slug: string;
  author: {
    name: string;
  };
  date: string;
}

export default function PostlistBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [bannerImage, setBannerImage] = useState("");
  const isMobile = useMediaQuery('(max-width: 768px)');
  const baseImageUrl = "https://i.imgur.com/VEBexAy.png?5000";
  const imageUrl = useImageVersion(baseImageUrl);
  
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
          link: post.URL,  // Extract link from the API response
          slug: post.slug,
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

    // Fetch banner image from Strapi
    const fetchBannerImage = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/advertisements/1?populate=*`, {
          headers: {
            Authorization: `Bearer deda75a117450c315ea0c5d3652d912b88fd301ea8b24217d199a6ea1a152a76a67fd0cf4215219c24dbfd61c9e10991b1c44eb1d8b953590958c58c8dbebe1eee48a6fe2342846bf6fc29a1ba21f0b11de39a22c6de5ac81919e24961e2bd6bb578aa141073d0882353c27b5286a530e2fa079e512b0ca1ee9a77b0aa44d3fa`,
          },
        });
        const bannerData = response.data.data;
        const largeImageUrl = bannerData.attributes.Photo.data.attributes.formats.small.url;

        const fullImageUrl = `http://localhost:1337${largeImageUrl}`;

        setBannerImage(fullImageUrl);
      } catch (error) {
        console.error('Error fetching banner image:', error);
      }
    };

    fetchPosts();
    fetchBannerImage();
  }, []);

  

  // Inline styles
  const styles: { [key: string]: CSSProperties } = {
    container: {
      // backgroundColor: '#F5F5F5',
      padding: '1rem',
      minHeight: '100vh',
      marginBottom: '2rem', // Add a bottom margin
    },
    banner: {
      position: 'sticky',
      top: '10px',
      marginTop: '1rem',
      width: '70%',
      height: 'auto',
      // backgroundColor: '#F5F5F5',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      paddingTop: '56.25%', // 16:9 Aspect Ratio (adjust as needed)
      overflow: 'hidden',
      // backgroundColor: '#F5F5F5',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      // backgroundColor: '#F5F5F5',
    },
    postTitle: {
      // backgroundColor: '#F5F5F5', // Ensure consistent background color for titles
      marginBottom: '0.5rem', // Adjust spacing as needed
    },
  };

  const PostItem = ({ post }: { post: Post }) => (
    <Box style={{ position: 'relative', marginBottom: '1rem' }}>
      <Image
        radius="md"
        src={post.featured_image}
        alt={post.title}
        style={{ width: '100%', height: 'auto' }}
      />
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1rem',
          zIndex: 2,
        }}
      >
        <a href={`/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
          <Title order={3}>{post.title}</Title>
        </a>
        <Text c="white">{new Date(post.date).toLocaleDateString()}</Text>
        <Badge color="#FF6031">最新</Badge>
      </Box>
    </Box>
  );

  return (
    <Container size="1800" style={{ backgroundColor: '#F5F5F5' }} >
      <Title fw={800} order={2}>更多文章</Title>
      <br />
      <Divider size="sm" />
      <br />
      <Grid>
      <Grid.Col span={12}>
          <Stack
            align="stretch"
            justify="flex-start"
            style={{ overflow: 'hidden' }}
            gap="lg"
          >
            {posts.map((post, index) => (
              isMobile ? (
                <PostItem key={index} post={post} />
              ) : (
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
                    <a href={`/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Title style={styles.postTitle} order={2}>{post.title}</Title>
                    </a>
                    <Title style={styles.postTitle} order={5}>{new Date(post.date).toLocaleDateString()}</Title>
                    <Badge color="#FF6031">最新</Badge>
                  </Grid.Col>
                </Grid>
              )
            ))}
          </Stack>
        </Grid.Col>
        </Grid>
    </Container>
  );
}
