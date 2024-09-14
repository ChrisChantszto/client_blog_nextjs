import { useEffect, useState, CSSProperties } from "react";
import { Text, Title, Divider, Image, Stack, Button, Grid, Container, Badge, Group, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { useMediaQuery } from "@mantine/hooks";

interface Post {
  featured_image: string;
  title: string;
  link: string;  // Added link property
  author: {
    name: string;
  };
  date: string;
}

export default function FoodPostlist() {
  const [posts, setPosts] = useState<Post[]>([]);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [activeButton, setActiveButton] = useState('全部');

  const categories = ['全部', '新品發佈', '人氣美食', '餐廳情報', '美食攻略', '小食甜品', '酒店餐飲'];

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/rest/v1.1/sites/playeateasy.com/posts/?category=%E9%A3%B2%E9%A3%9F'
        );
        const fetchedPosts = response.data.posts.slice(0, 4).map((post: any) => ({
          featured_image: post.featured_image,
          title: post.title,
          link: post.URL,  // Extract link from the API response
          author: {
            name: post.author.name
          },
          date: post.date,
          slug: post.slug
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
      marginBottom: '0.5rem',
    },
  };

  return (
    <Container fluid style={{ backgroundColor: '#F5F5F5' }} >
      <Title fw={800} order={2}>全部文章</Title>
      <br />
      <Divider size="sm" />
      <br />
      <Group gap="xs">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            radius="xl"
            color={activeButton === category ? '#FF6031' : 'gray'}
            onClick={() => setActiveButton(category)}
            styles={(theme) => ({
              root: {
                backgroundColor: activeButton === category ? "#FF6031" : 'transparent',
                border: `1px solid ${activeButton === category ? "#FF6031" : theme.colors.gray[5]}`,
                color: activeButton === category ? theme.white : theme.colors.gray[7],
                '&:hover': {
                  backgroundColor: "#FF6031",
                  color: theme.white,
                },
              },
            })}
          >
            {category}
          </Button>
        ))}
      </Group>
      <br />
      <Grid>
        <Grid.Col span={10}>
          <Stack
            h={1000}
            align="stretch"
            justify="flex-start"
            style={{ overflow: 'hidden' }}
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
                  <a href={`/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Title style={styles.postTitle} order={2}>{post.title}</Title>
                  </a>
                  <Title style={styles.postTitle} order={5}>{new Date(post.date).toLocaleDateString()}</Title>
                  <Group>
                    <Badge color="#FF6031">最新</Badge>
                    <Badge autoContrast color="#69FFB3">飲食</Badge>
                  </Group>
                </Grid.Col>
              </Grid>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={2}>
          <div style={styles.banner}>
            {/* <Image
              radius="md"
              src="https://via.placeholder.com/200x400.png?text=Banner"
              alt="Banner"
              fit="contain"
              style={{ width: '100%', height: 'auto' }}
            /> */}
            <br />
            {isMobile ? null : <Title order={2}>FOLLOW US!</Title>}
            <br />
            <Stack gap="xs">
              <Grid>
                <Grid.Col span={3}>
                  <a href="https://www.facebook.com/playeateasy/" target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.0189 21.3138L25.5846 17.7226H22.0998V15.3884C22.0998 14.4064 22.5863 13.4469 24.142 13.4469H25.7487V10.3887C24.813 10.2397 23.8676 10.159 22.9201 10.1475C20.0519 10.1475 18.1793 11.8701 18.1793 14.9843V17.7226H15V21.3138H18.1793V30H22.0998V21.3138H25.0189Z" fill="#337FFF"/>
                    </svg>
                  </a>
                </Grid.Col>
                <Grid.Col span={9}>
                  {isMobile ? null : <Text fw={800}>Play Eat Easy 玩食易</Text>}
                </Grid.Col>
                <Grid.Col span={3}>
                  <a href="https://www.instagram.com/playeateasy/?hl=en" target="_blank" rel="noopener noreferrer">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1673 19.9941C17.1673 18.1543 18.6592 16.6625 20.5001 16.6625C22.341 16.6625 23.8338 18.1543 23.8338 19.9941C23.8338 21.8339 22.341 23.3258 20.5001 23.3258C18.6592 23.3258 17.1673 21.8339 17.1673 19.9941ZM15.3652 19.9941C15.3652 22.8285 17.6641 25.126 20.5001 25.126C23.3362 25.126 25.6351 22.8285 25.6351 19.9941C25.6351 17.1598 23.3362 14.8623 20.5001 14.8623C17.6641 14.8623 15.3652 17.1598 15.3652 19.9941ZM24.6383 14.6588C24.6382 14.896 24.7085 15.1279 24.8403 15.3252C24.9721 15.5224 25.1594 15.6762 25.3787 15.7671C25.5979 15.8579 25.8392 15.8818 26.072 15.8356C26.3048 15.7894 26.5187 15.6753 26.6865 15.5076C26.8544 15.34 26.9688 15.1263 27.0152 14.8937C27.0616 14.6611 27.0379 14.4199 26.9472 14.2008C26.8565 13.9816 26.7027 13.7942 26.5054 13.6624C26.3081 13.5305 26.0762 13.4601 25.8388 13.46H25.8383C25.5202 13.4601 25.2151 13.5865 24.9901 13.8112C24.7651 14.036 24.6386 14.3408 24.6383 14.6588ZM16.4601 28.1291C15.4851 28.0847 14.9552 27.9224 14.603 27.7853C14.1361 27.6037 13.803 27.3873 13.4528 27.0377C13.1025 26.6882 12.8857 26.3556 12.7047 25.889C12.5675 25.5372 12.4051 25.0074 12.3607 24.033C12.3123 22.9796 12.3026 22.6631 12.3026 19.9942C12.3026 17.3253 12.3131 17.0097 12.3607 15.9554C12.4051 14.981 12.5687 14.4523 12.7047 14.0994C12.8865 13.6328 13.103 13.2999 13.4528 12.9499C13.8025 12.5998 14.1353 12.3832 14.603 12.2023C14.955 12.0651 15.4851 11.9028 16.4601 11.8585C17.5142 11.8101 17.8308 11.8004 20.5001 11.8004C23.1694 11.8004 23.4864 11.8109 24.5414 11.8585C25.5163 11.9029 26.0454 12.0664 26.3984 12.2023C26.8653 12.3832 27.1984 12.6003 27.5487 12.9499C27.8989 13.2994 28.1149 13.6328 28.2967 14.0994C28.434 14.4512 28.5964 14.981 28.6407 15.9554C28.6892 17.0097 28.6989 17.3253 28.6989 19.9942C28.6989 22.6631 28.6892 22.9787 28.6407 24.033C28.5963 25.0074 28.4331 25.537 28.2967 25.889C28.1149 26.3556 27.8985 26.6885 27.5487 27.0377C27.1989 27.387 26.8653 27.6037 26.3984 27.7853C26.0464 27.9225 25.5163 28.0848 24.5414 28.1291C23.4873 28.1776 23.1706 28.1872 20.5001 28.1872C17.8296 28.1872 17.5138 28.1776 16.4601 28.1291ZM16.3773 10.0605C15.3127 10.109 14.5852 10.2777 13.95 10.5247C13.292 10.7799 12.7351 11.1221 12.1785 11.6775C11.6219 12.2328 11.2803 12.7904 11.025 13.4479C10.7778 14.0832 10.609 14.8098 10.5606 15.8737C10.5113 16.9394 10.5 17.28 10.5 19.9941C10.5 22.7082 10.5113 23.0489 10.5606 24.1145C10.609 25.1785 10.7778 25.9051 11.025 26.5404C11.2803 27.1975 11.622 27.7556 12.1785 28.3108C12.735 28.8659 13.292 29.2077 13.95 29.4635C14.5864 29.7106 15.3127 29.8793 16.3773 29.9277C17.4441 29.9762 17.7844 29.9883 20.5001 29.9883C23.2158 29.9883 23.5567 29.977 24.623 29.9277C25.6876 29.8793 26.4146 29.7106 27.0503 29.4635C27.7078 29.2077 28.2652 28.8661 28.8217 28.3108C29.3783 27.7554 29.7192 27.1975 29.9752 26.5404C30.2224 25.9051 30.392 25.1784 30.4397 24.1145C30.4882 23.0481 30.4994 22.7082 30.4994 19.9941C30.4994 17.28 30.4882 16.9394 30.4397 15.8737C30.3912 14.8097 30.2224 14.0828 29.9752 13.4479C29.7192 12.7908 29.3774 12.2337 28.8217 11.6775C28.2661 11.1213 27.7078 10.7799 27.0511 10.5247C26.4146 10.2777 25.6875 10.1082 24.6238 10.0605C23.5575 10.0121 23.2166 10 20.5009 10C17.7852 10 17.4441 10.0113 16.3773 10.0605Z" fill="url(#paint0_radial_1_388)"/>
                      <path d="M17.1673 19.9941C17.1673 18.1543 18.6592 16.6625 20.5001 16.6625C22.341 16.6625 23.8338 18.1543 23.8338 19.9941C23.8338 21.8339 22.341 23.3258 20.5001 23.3258C18.6592 23.3258 17.1673 21.8339 17.1673 19.9941ZM15.3652 19.9941C15.3652 22.8285 17.6641 25.126 20.5001 25.126C23.3362 25.126 25.6351 22.8285 25.6351 19.9941C25.6351 17.1598 23.3362 14.8623 20.5001 14.8623C17.6641 14.8623 15.3652 17.1598 15.3652 19.9941ZM24.6383 14.6588C24.6382 14.896 24.7085 15.1279 24.8403 15.3252C24.9721 15.5224 25.1594 15.6762 25.3787 15.7671C25.5979 15.8579 25.8392 15.8818 26.072 15.8356C26.3048 15.7894 26.5187 15.6753 26.6865 15.5076C26.8544 15.34 26.9688 15.1263 27.0152 14.8937C27.0616 14.6611 27.0379 14.4199 26.9472 14.2008C26.8565 13.9816 26.7027 13.7942 26.5054 13.6624C26.3081 13.5305 26.0762 13.4601 25.8388 13.46H25.8383C25.5202 13.4601 25.2151 13.5865 24.9901 13.8112C24.7651 14.036 24.6386 14.3408 24.6383 14.6588ZM16.4601 28.1291C15.4851 28.0847 14.9552 27.9224 14.603 27.7853C14.1361 27.6037 13.803 27.3873 13.4528 27.0377C13.1025 26.6882 12.8857 26.3556 12.7047 25.889C12.5675 25.5372 12.4051 25.0074 12.3607 24.033C12.3123 22.9796 12.3026 22.6631 12.3026 19.9942C12.3026 17.3253 12.3131 17.0097 12.3607 15.9554C12.4051 14.981 12.5687 14.4523 12.7047 14.0994C12.8865 13.6328 13.103 13.2999 13.4528 12.9499C13.8025 12.5998 14.1353 12.3832 14.603 12.2023C14.955 12.0651 15.4851 11.9028 16.4601 11.8585C17.5142 11.8101 17.8308 11.8004 20.5001 11.8004C23.1694 11.8004 23.4864 11.8109 24.5414 11.8585C25.5163 11.9029 26.0454 12.0664 26.3984 12.2023C26.8653 12.3832 27.1984 12.6003 27.5487 12.9499C27.8989 13.2994 28.1149 13.6328 28.2967 14.0994C28.434 14.4512 28.5964 14.981 28.6407 15.9554C28.6892 17.0097 28.6989 17.3253 28.6989 19.9942C28.6989 22.6631 28.6892 22.9787 28.6407 24.033C28.5963 25.0074 28.4331 25.537 28.2967 25.889C28.1149 26.3556 27.8985 26.6885 27.5487 27.0377C27.1989 27.387 26.8653 27.6037 26.3984 27.7853C26.0464 27.9225 25.5163 28.0848 24.5414 28.1291C23.4873 28.1776 23.1706 28.1872 20.5001 28.1872C17.8296 28.1872 17.5138 28.1776 16.4601 28.1291ZM16.3773 10.0605C15.3127 10.109 14.5852 10.2777 13.95 10.5247C13.292 10.7799 12.7351 11.1221 12.1785 11.6775C11.6219 12.2328 11.2803 12.7904 11.025 13.4479C10.7778 14.0832 10.609 14.8098 10.5606 15.8737C10.5113 16.9394 10.5 17.28 10.5 19.9941C10.5 22.7082 10.5113 23.0489 10.5606 24.1145C10.609 25.1785 10.7778 25.9051 11.025 26.5404C11.2803 27.1975 11.622 27.7556 12.1785 28.3108C12.735 28.8659 13.292 29.2077 13.95 29.4635C14.5864 29.7106 15.3127 29.8793 16.3773 29.9277C17.4441 29.9762 17.7844 29.9883 20.5001 29.9883C23.2158 29.9883 23.5567 29.977 24.623 29.9277C25.6876 29.8793 26.4146 29.7106 27.0503 29.4635C27.7078 29.2077 28.2652 28.8661 28.8217 28.3108C29.3783 27.7554 29.7192 27.1975 29.9752 26.5404C30.2224 25.9051 30.392 25.1784 30.4397 24.1145C30.4882 23.0481 30.4994 22.7082 30.4994 19.9941C30.4994 17.28 30.4882 16.9394 30.4397 15.8737C30.3912 14.8097 30.2224 14.0828 29.9752 13.4479C29.7192 12.7908 29.3774 12.2337 28.8217 11.6775C28.2661 11.1213 27.7078 10.7799 27.0511 10.5247C26.4146 10.2777 25.6875 10.1082 24.6238 10.0605C23.5575 10.0121 23.2166 10 20.5009 10C17.7852 10 17.4441 10.0113 16.3773 10.0605Z" fill="url(#paint1_radial_1_388)"/>
                      <defs>
                      <radialGradient id="paint0_radial_1_388" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.1572 30.0827) scale(26.1086 26.093)">
                      <stop offset="0.09" stop-color="#FA8F21"/>
                      <stop offset="0.78" stop-color="#D82D7E"/>
                      </radialGradient>
                      <radialGradient id="paint1_radial_1_388" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.6293 30.9781) scale(20.5772 20.5649)">
                      <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0"/>
                      <stop offset="1" stop-color="#8C3AAA"/>
                      </radialGradient>
                      </defs>
                    </svg>
                  </a>
                </Grid.Col>
                <Grid.Col span={9}>
                  {isMobile ? null : <Text fw={800}>PLAYEATEASY</Text>}
                </Grid.Col>
                <Grid.Col span={3}>
                  <a href="https://www.youtube.com/@playeateasy" target="_blank" rel="noopener noreferrer">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.4998 13.6543C32.2249 12.6111 31.4117 11.7882 30.377 11.5061C28.5062 11 21 11 21 11C21 11 13.4976 11 11.623 11.5061C10.5921 11.7843 9.77887 12.6073 9.50016 13.6543C9 15.5475 9 19.5 9 19.5C9 19.5 9 23.4525 9.50016 25.3457C9.77506 26.3889 10.5883 27.2118 11.623 27.4939C13.4976 28 21 28 21 28C21 28 28.5062 28 30.377 27.4939C31.4079 27.2157 32.2211 26.3927 32.4998 25.3457C33 23.4525 33 19.5 33 19.5C33 19.5 33 15.5475 32.4998 13.6543Z" fill="#FF3000"/>
                      <path d="M18.6023 23.1434L24.8371 19.5L18.6023 15.8566V23.1434Z" fill="white"/>
                    </svg>
                  </a>
                </Grid.Col>
                <Grid.Col span={9}>
                  {isMobile ? null : <Text fw={800}>@PLAYEATEASY</Text>}
                </Grid.Col>
                <Grid.Col span={3}>
                  <a href="https://www.xiaohongshu.com/user/profile/5de9b4d50000000001007191?xhsshare" target="_blank" rel="noopener noreferrer">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.5706 23.703C26.5456 23.3954 26.4413 23.2983 26.1292 23.2949C25.6856 23.2899 25.2415 23.2877 24.7979 23.2966C24.6418 23.2999 24.5947 23.2533 24.5952 23.0956C24.6002 21.1913 24.6002 19.2875 24.5952 17.3831C24.5952 17.2177 24.6557 17.1805 24.8062 17.186C25.0832 17.196 25.3614 17.181 25.6384 17.1921C25.7889 17.1977 25.8489 17.1621 25.845 16.9967C25.8344 16.4976 25.8322 15.9984 25.8461 15.4993C25.8511 15.3183 25.7867 15.29 25.6251 15.2905C24.2565 15.2966 22.8874 15.2966 21.5188 15.2905C21.3484 15.29 21.2779 15.3194 21.284 15.5121C21.299 16.0018 21.2973 16.492 21.2851 16.9817C21.2806 17.1682 21.3217 17.2454 21.5249 17.2321C21.792 17.2138 22.0618 17.2393 22.3289 17.2238C22.5082 17.2132 22.5409 17.2821 22.5404 17.4447C22.5354 19.3213 22.5343 21.1974 22.5415 23.074C22.5421 23.2661 22.4754 23.2999 22.3039 23.2966C21.8419 23.2872 21.38 23.2838 20.9175 23.3155C20.671 23.3327 20.5128 23.4243 20.4017 23.6547C20.138 24.2027 19.8504 24.739 19.5723 25.2803H26.1215C26.5273 25.176 26.6361 24.8806 26.6167 24.5053C26.6028 24.2377 26.5928 23.9701 26.5712 23.703H26.5706Z" fill="#EC0707"/>
                      <path d="M9.54158 18.0108C9.54435 19.7942 9.53936 21.5775 9.54657 23.3602C9.54713 23.5562 9.51715 23.6417 9.29506 23.6245C9.01024 23.6018 8.72209 23.629 8.43616 23.6151C8.26849 23.6073 8.23962 23.6689 8.2485 23.8211C8.29125 24.5517 8.70266 25.0503 9.41166 25.2174C9.46995 25.2313 9.54602 25.203 9.58155 25.2807H10.1368C10.1517 25.2391 10.1873 25.2368 10.2245 25.2302C10.8596 25.1225 11.2316 24.7288 11.4104 24.1314C11.4959 23.8455 11.5037 23.549 11.5048 23.2531C11.512 20.3421 11.5181 17.4312 11.5248 14.5203H9.52659C9.53214 15.684 9.54047 16.8471 9.54213 18.0108H9.54158Z" fill="#EC0707"/>
                      <path d="M16.5351 23.2779C16.4374 23.2779 16.3869 23.3151 16.3447 23.4006C16.0355 24.0285 15.7218 24.6543 15.4092 25.2805H18.4062C18.3978 25.2622 18.3995 25.2444 18.4106 25.2278C18.6344 25.1711 18.6771 24.9607 18.7648 24.7958C19.0269 24.3034 19.279 23.8059 19.551 23.279C18.5117 23.279 17.5234 23.2801 16.5351 23.2773V23.2779Z" fill="#EC0707"/>
                      <path d="M35.9505 15.8448C35.8184 15.6649 35.6601 15.5117 35.4752 15.3862C34.9112 15.0031 34.2388 15.2491 34.0517 15.9076C33.9457 16.2823 33.9951 16.6571 34.0634 17.0313C34.0761 17.1018 34.1122 17.1418 34.1816 17.1673C34.7979 17.39 35.5796 17.1057 35.9488 16.5216C35.966 16.5177 35.9833 16.5161 36.0005 16.5172V15.8515C35.9844 15.8459 35.9677 15.8437 35.9505 15.8448Z" fill="#EC0707"/>
                      <path d="M35.9702 20.3927C35.963 20.2222 35.8974 20.0718 35.8103 19.9269C35.4016 19.2445 34.7959 18.9047 34.0053 18.8814C33.7077 18.8725 33.6944 18.8592 33.6905 18.5633C33.6838 18.0841 33.7033 17.6061 33.6294 17.1281C33.464 16.0565 32.8327 15.4042 31.7667 15.2248C31.5569 15.1893 31.347 15.1693 31.1343 15.1576C30.8706 15.1438 30.618 15.0477 30.6319 14.6963C30.6347 14.6302 30.6063 14.5702 30.5614 14.5203H28.5632C28.5698 14.6857 28.5687 14.8517 28.5848 15.0166C28.5998 15.1687 28.5293 15.2032 28.3938 15.2065C28.089 15.2137 27.7842 15.2398 27.4794 15.2454C27.3423 15.2481 27.284 15.2831 27.2862 15.4347C27.2945 15.9705 27.294 16.5068 27.2862 17.0431C27.284 17.1886 27.3284 17.2363 27.475 17.2313C27.7709 17.2213 28.0674 17.2358 28.3628 17.2252C28.5138 17.2197 28.5726 17.2558 28.5682 17.4201C28.5565 17.8543 28.5576 18.289 28.5682 18.7232C28.5721 18.8803 28.5249 18.9269 28.3672 18.9236C27.8864 18.9136 27.405 18.933 26.9248 18.9142C26.6949 18.9053 26.6483 18.9874 26.6544 19.1968C26.6683 19.677 26.6766 20.1589 26.6516 20.6381C26.6383 20.8996 26.7332 20.944 26.9648 20.9351C27.4172 20.9179 27.8714 20.9429 28.3239 20.9246C28.5576 20.9151 28.6343 20.9645 28.6315 21.2199C28.617 22.5508 28.6259 23.8821 28.627 25.213C28.6243 25.2352 28.6215 25.2574 28.6187 25.2796H30.5614C30.5636 25.2635 30.5636 25.2468 30.5619 25.2307C30.6397 25.1608 30.6363 25.0619 30.6419 24.9676C30.6485 24.8571 30.6447 24.746 30.6447 24.6355C30.6447 23.5279 30.6447 22.4197 30.6447 21.3121C30.6447 21.1339 30.6524 20.9784 30.8989 20.9806C31.684 20.9862 32.4696 20.9662 33.2541 20.9906C33.6466 21.0028 33.8526 21.1933 33.8943 21.5852C33.9503 22.1088 33.9254 22.6363 33.9065 23.162C33.8993 23.3647 33.7693 23.4757 33.5739 23.5124C33.4645 23.5329 33.3535 23.5312 33.2425 23.5324C32.9099 23.5351 32.5773 23.5262 32.2448 23.5374C32.0638 23.5435 31.9505 23.6029 31.9694 23.8222C32.0321 24.5362 32.604 25.1341 33.3174 25.2307C33.4346 25.2468 33.5578 25.223 33.6689 25.2801H34.3906C34.4123 25.2618 34.4367 25.2535 34.4656 25.2518C35.1662 25.2024 35.8247 24.5983 35.9591 23.8971C35.9724 23.8943 35.9863 23.8932 36.0002 23.8938V20.3993C35.9907 20.3938 35.9807 20.3921 35.9702 20.3921V20.3927ZM31.619 18.6116C31.6157 18.7493 31.5541 18.8159 31.4308 18.8392C31.3042 18.8631 31.1765 18.8886 31.0483 18.8969C30.7768 18.9147 30.6141 18.7726 30.5841 18.5055C30.5802 18.4689 30.5775 18.4317 30.5769 18.395C30.5764 18.2196 30.5769 18.0447 30.5769 17.8693C30.5764 17.8693 30.5752 17.8693 30.5747 17.8693C30.5747 17.6755 30.578 17.4817 30.5736 17.2885C30.5708 17.1708 30.5986 17.117 30.7329 17.1553C30.8562 17.1902 30.9867 17.2019 31.1138 17.2236C31.5735 17.3024 31.5768 17.3096 31.6229 17.7826C31.6501 18.0597 31.6257 18.3351 31.6196 18.6116H31.619Z" fill="#EC0707"/>
                      <path d="M16.559 19.1433C16.8017 19.2132 17.0526 19.2071 17.3019 19.2105C17.499 19.2132 17.6961 19.2105 17.9182 19.2105C17.554 20.0144 17.1998 20.7734 16.8655 21.5407C16.5918 22.1691 16.7967 22.5106 17.4768 22.5472C18.0764 22.5794 18.6783 22.5733 19.2784 22.5867C19.4178 22.59 19.5455 22.5583 19.6121 22.4329C19.8658 21.9559 20.1107 21.474 20.3711 20.9699C20.0535 20.9466 19.7787 20.9305 19.505 20.9044C19.2029 20.8755 19.1541 20.7917 19.2679 20.5069C19.309 20.4042 19.3584 20.3053 19.4078 20.2059C19.8614 19.2887 20.3167 18.3727 20.7686 17.4549C20.8075 17.3761 20.8763 17.3033 20.8541 17.1951C20.0896 17.2373 19.3262 17.2795 18.5483 17.3222C18.565 17.1462 18.6377 17.0069 18.7044 16.8708C19.0664 16.1252 19.4356 15.3829 19.8026 14.64C19.8531 14.6134 19.8547 14.5678 19.8503 14.5195H17.9076C17.9115 14.539 17.9154 14.5584 17.9187 14.5778C17.3258 15.7443 16.7489 16.9191 16.1993 18.1073C16.161 18.1905 16.136 18.2805 16.1127 18.3693C16.0055 18.7796 16.146 19.0245 16.5585 19.1427L16.559 19.1433Z" fill="#EC0707"/>
                      <path d="M15.0226 19.7986C14.9621 19.0252 14.9177 18.2501 14.8766 17.4751C14.8683 17.3118 14.8233 17.253 14.6501 17.2574C14.151 17.2696 13.6513 17.2719 13.1522 17.2574C12.9467 17.2513 12.9062 17.3285 12.914 17.5123C12.9279 17.8354 12.9179 18.1591 12.9179 18.4828C12.9351 18.4828 12.9523 18.4828 12.9695 18.4828C12.9695 18.7504 12.9556 19.0191 12.9717 19.2856C13.0383 20.3932 13.1549 21.4947 13.4692 22.5646C13.6285 23.1071 13.8356 23.6284 14.2109 24.0665C14.312 24.1847 14.3808 24.2186 14.463 24.0476C14.6073 23.7489 14.7761 23.4618 14.916 23.1615C15.2791 22.3808 15.348 21.5686 15.1653 20.728C15.0987 20.4221 15.0465 20.1106 15.0221 19.7986H15.0226Z" fill="#EC0707"/>
                      <path d="M7.95138 17.2874C7.39673 17.2918 6.84208 17.2974 6.28743 17.2846C6.11365 17.2807 6.07368 17.3379 6.06424 17.4989C5.9754 18.9741 5.83938 20.4437 5.52402 21.8911C5.50792 21.895 5.49127 21.8973 5.47461 21.8973V22.2853C5.49016 22.292 5.50626 22.2942 5.52291 22.292C5.89712 22.9583 6.27188 23.6251 6.64998 24.2985C6.68551 24.2663 6.70939 24.2508 6.72438 24.2297C6.77212 24.1619 6.81821 24.0925 6.86262 24.0226C7.48279 23.0382 7.74096 21.9422 7.86255 20.8029C7.98081 19.692 7.96804 18.5699 8.13127 17.4628C8.15625 17.2952 8.08019 17.2863 7.95138 17.2874Z" fill="#EC0707"/>
                    </svg>
                  </a>
                </Grid.Col>
                <Grid.Col span={9}>
                  {isMobile ? null : <Text fw={800}>Play Eat Easy 玩食易</Text>}
                </Grid.Col>
                <Grid.Col span={3}>
                  <a href="https://www.linkedin.com/company/lab-20?originalSubdomain=hk" target="_blank" rel="noopener noreferrer">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.03027 10.6038C9.03027 9.73513 9.75751 9.03003 10.654 9.03003H29.3766C30.2734 9.03003 31.0003 9.73513 31.0003 10.6038V29.4265C31.0003 30.2954 30.2734 31 29.3766 31H10.654C9.7576 31 9.03027 30.2955 9.03027 29.4268V10.6035V10.6038Z" fill="#006699"/>
                      <path d="M15.707 27.416V17.5251H12.4194V27.416H15.7073H15.707ZM14.0639 16.1749C15.2101 16.1749 15.9237 15.4154 15.9237 14.4662C15.9022 13.4954 15.2101 12.7571 14.0857 12.7571C12.9605 12.7571 12.2256 13.4954 12.2256 14.4661C12.2256 15.4153 12.9389 16.1748 14.0423 16.1748H14.0636L14.0639 16.1749ZM17.5267 27.416H20.8141V21.8931C20.8141 21.5979 20.8355 21.3019 20.9224 21.091C21.1599 20.5001 21.7008 19.8885 22.6092 19.8885C23.7985 19.8885 24.2746 20.7954 24.2746 22.1252V27.416H27.5618V21.7449C27.5618 18.7069 25.9402 17.2932 23.7773 17.2932C22.004 17.2932 21.2251 18.2843 20.7924 18.9594H20.8143V17.5254H17.5269C17.5698 18.4533 17.5266 27.4164 17.5266 27.4164L17.5267 27.416Z" fill="white"/>
                    </svg>
                  </a>
                </Grid.Col>
                <Grid.Col span={9}>
                  {isMobile ? null : <Text fw={800}>LAB20 MEDIA</Text>}
                </Grid.Col>
                </Grid>
            </Stack> 
          </div>
          
        </Grid.Col>
      </Grid>

      <Center style={{ marginTop: '1rem' }}>
        <Button variant="filled" color="#FF6031" radius="xl">
          <Text size="xl">更多文章</Text>
          <IconPlus />
        </Button>
      </Center>
    </Container>
  );
}
