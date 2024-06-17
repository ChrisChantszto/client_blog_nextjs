// import { Text, Title, Divider, Image, Stack, Button, Grid, Badge, Center } from "@mantine/core";
// import { IconPlus } from "@tabler/icons-react";

// export default function Postlist() {
//     return(
//         <>
//             <Title fw={800} order={1} c="orange">SELECTED POST</Title>
//             <Title fw={800} order={2}>精選文章</Title>
//             <br />
//             <Divider size="sm" />
//             <br />
//             <Stack
//                 h={1000}
//                 bg="var(--mantine-color-body)"
//                 align="stretch"
//                 justify="flex-start"
//                 gap="lg"
//             >
//                 <Grid>
//                     <Grid.Col span={4}>
//                         <Image
//                             radius="md"
//                             h={200}
//                             w="auto"
//                             fit="contain"
//                             src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
//                         />
//                     </Grid.Col>
//                     <Grid.Col span={8}>
//                         <Badge color="#FF6031">最新</Badge>
//                         <Title order={5}>May 09, 2024  / By Venus Law</Title>
//                         <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
//                     </Grid.Col>
//                 </Grid>
//                 <Grid>
//                     <Grid.Col span={4}>
//                         <Image
//                             radius="md"
//                             h={200}
//                             w="auto"
//                             fit="contain"
//                             src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
//                         />
//                     </Grid.Col>
//                     <Grid.Col span={8}>
//                         <Badge color="#FF6031">最新</Badge>
//                         <Title order={5}>May 09, 2024  / By Venus Law</Title>
//                         <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
//                     </Grid.Col>
//                 </Grid>
//                 <Grid>
//                     <Grid.Col span={4}>
//                         <Image
//                             radius="md"
//                             h={200}
//                             w="auto"
//                             fit="contain"
//                             src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
//                         />
//                     </Grid.Col>
//                     <Grid.Col span={8}>
//                         <Badge color="#FF6031">最新</Badge>
//                         <Title order={5}>May 09, 2024  / By Venus Law</Title>
//                         <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
//                     </Grid.Col>
//                 </Grid>
//                 <Grid>
//                     <Grid.Col span={4}>
//                         <Image
//                             radius="md"
//                             h={200}
//                             w="auto"
//                             fit="contain"
//                             src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
//                         />
//                     </Grid.Col>
//                     <Grid.Col span={8}>
//                         <Badge color="#FF6031">最新</Badge>
//                         <Title order={5}>May 09, 2024  / By Venus Law</Title>
//                         <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
//                     </Grid.Col>
//                 </Grid>
//             </Stack>
//             <Center><Button variant="filled" color="#FF6031" radius="xl"><Text size="xl">更多文章</Text><IconPlus /></Button></Center>
//         </>
//     )
// }

import { useEffect, useState } from "react";
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
        const posts = response.data.posts.slice(0, 4).map((post: any) => ({
          featured_image: post.featured_image,
          title: post.title,
          author: post.author.name,
          date: post.date,
        }));
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Title fw={800} order={1} c="orange">SELECTED POST</Title>
      <Title fw={800} order={2}>精選文章</Title>
      <br />
      <Divider size="sm" />
      <br />
      <Stack
        h={1000}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="flex-start"
        gap="lg"
      >
        {posts.map((post) => (
          <Grid key={post.title}>
            <Grid.Col span={4}>
              <Image
                radius="md"
                h={200}
                w="auto"
                fit="contain"
                src={post.featured_image}
              />
            </Grid.Col>
            <Grid.Col span={8}>
              <Badge color="#FF6031">最新</Badge>
              <Title order={5}>{new Date(post.date).toLocaleDateString()} / By {post.author}</Title>
              <Title order={2}>{post.title}</Title>
            </Grid.Col>
          </Grid>
        ))}
      </Stack>
      <Center>
        <Button variant="filled" color="#FF6031" radius="xl">
          <Text size="xl">更多文章</Text>
          <IconPlus />
        </Button>
      </Center>
    </>
  );
}
