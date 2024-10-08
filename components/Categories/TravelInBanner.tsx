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

export default function TravelInBanner() {
    const categories = [
        { label: "全部文章", link: "/travelIn/all" },
        { label: "大灣區美食", link: "travelIn/food" },
        { label: "大灣區玩樂", link: "/travelIn/play" },
        { label: "大灣區商場", link: "/travelIn/mall" },
        { label: "北上消費", link: "/travelIn/buy" },
        { label: "北上旅遊", link: "/travelIn/travel" },
    ];

    return (
        <MantineProvider theme={theme}>
        <Box>
            <Container 
                size="xxl" 
                fluid 
                style={{ 
                    backgroundColor: '#916FEF',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Title order={1} px={30} style={{ fontWeight: 800, color: 'white' }}>
                    大灣區旅遊 #TRAVEL 
                </Title>
            </Container>
            <Container 
                size="xxl"
                fluid
                style={{
                    backgroundColor: '#7C58E5',
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