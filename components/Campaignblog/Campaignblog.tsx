 import { Container, Title, Group, Card, Image, Text, Button, Badge } from '@mantine/core';
 import { useEffect, useState } from "react";
 import { Carousel } from '@mantine/carousel';
 import axios from 'axios';

 export default function Campaignblog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%e5%84%aa%e6%83%a0%e6%b8%9b%e5%83%b9"
        );
        const fetchedPosts = response.data.posts.map((post: any) => ({
          title: post.title,
          link: post.URL,
          featured_image: post.featured_image,
        })) as Post[];

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const cardStyle = {
     width: '390px',
     height: '400px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between'
   };

   return (
     <Container fluid h={800} style={{ backgroundColor: '#433D33', height: '50px' }}>
       <br />
       <Title fw={800} order={1} px={30} c="white">CAMPAIGN BLOG</Title>
       <Title fw={800} order={1} px={30} c="white">最新活動</Title>
       <br />
       <Carousel
         withIndicators
         height={550}
         slideSize={{ base: '100%', sm: '50%', md: '23%' }}
         slideGap={{ base: 0, sm: 'md' }}
         loop
         align="start"
       >
         {posts.map((post, index) => (
          <Carousel.Slide key={index}>
            <Card padding="xl" component='a' target="_blank" radius="md">
              <Card.Section component="a" href={post.link} target="_blank">
                <Image src={post.featured_image} h={300} alt={post.title} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Badge color="orange">最新</Badge>
                <Title order={4}>{post.title}</Title>
              </Group>
            </Card>
          </Carousel.Slide>
        ))}
       </Carousel>
     </Container>
   );
}