import { Text, Container, Title } from '@mantine/core';

export default function Discount() {
        return (
          <Container fluid h={50} style={{ backgroundColor: '#F5F5F5', height: '50px' }}>
            <Title fw={800} order={1} c="#FF6031">LATEST JETSO</Title>
            <Title fw={800} order={2}>最新優惠</Title>
          </Container>
        );
}