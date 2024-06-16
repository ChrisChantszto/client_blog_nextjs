import YouTube from "react-youtube";
import { Center, Container, Title } from "@mantine/core";

export default function Youtube() {
  return (
    <Container fluid h={600} style={{ backgroundColor: '#e8e2e2', height: '50px' }}>
        <br />
        <br />
        <br />
        <Center>
            <Title fw={800} order={1} c="orange">Youtube Video</Title>
        </Center>
        <Center>
            <Title fw={800} order={2} c="black">更多影片</Title>
        </Center>
    </Container>
  );
}