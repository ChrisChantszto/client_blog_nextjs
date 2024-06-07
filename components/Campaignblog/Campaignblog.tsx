import { Container, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function Campaignblog() {
  return (
    <Container fluid h={500} style={{ backgroundColor: '#433D33', height: '50px' }}>
      <br />
      <Title fw={800} order={1} px={30} c="white">CAMPAIGN BLOG</Title>
      <Title fw={800} order={1} px={30} c="white">最新活動</Title>
    </Container>
  );
}