import { Container, Title, Button, Group, Box, MantineProvider, createTheme, rem } from "@mantine/core"

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem(300),
    xs: rem(400),
    sm: rem(500),
    md: rem(600),
    lg: rem(700),
    xl: rem(800),
    xxl: rem(900),
  };
  
  const theme = createTheme({
    components: {
      Container: Container.extend({
        vars: (_, { size, fluid }) => ({
          root: {
            '--container-size': fluid
              ? '100%'
              : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
          },
        }),
      }),
    },
  });

export default function PlayBanner() {
    const categories = [
        { label: "全部", link: "/food-exploration" },
        { label: "演唱會", link: "/local-specialties" },
        { label: "戶外活動", link: "/global-flavors" },
        { label: "室內活動", link: "/healthy-eating" },
        { label: "電影", link: "/healthy-eating" },
        { label: "親子遊", link: "/healthy-eating" },
    ];

    return (
        <MantineProvider theme={theme}>
        <Box>
            <Container 
                size="xxl" 
                fluid 
                style={{ 
                    backgroundColor: '#1EC9EF',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Title order={1} px={30} style={{ fontWeight: 800, color: 'white' }}>
                    玩樂 #PLAY
                </Title>
            </Container>
            <Container 
                size="xxl"
                fluid
                style={{
                    backgroundColor: '#00A3C7',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Group gap="lg">
                    {categories.map((category, index) => (
                        <Button 
                            key={index}
                            variant="subtle"
                            color="white"
                            component="a"
                            href={category.link}
                        >
                            {category.label}
                        </Button>
                    ))}
                </Group>
            </Container>
        </Box>
        </MantineProvider>
    )
}