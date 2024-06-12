import { Container, Title, Group, Card, Image, Text, Button, Badge } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function Campaignblog() {
  return (
    <Container fluid h={500} style={{ backgroundColor: '#433D33', height: '50px' }}>
      <br />
      <Title fw={800} order={1} px={30} c="white">CAMPAIGN BLOG</Title>
      <Title fw={800} order={1} px={30} c="white">最新活動</Title>
      <br />
      <Carousel
        withIndicators
        height={390}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        align="start"
      >
        <Carousel.Slide><Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
    </Carousel.Slide>
        <Carousel.Slide>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
        </Carousel.Slide>
        <Carousel.Slide>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </Container>
  );
}