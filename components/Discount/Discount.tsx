import { Text, Container } from '@mantine/core';

export default function Discount() {
        return (
          <Container fluid h={50} style={{ backgroundColor: '#433D33', height: '50px' }}>
            <Text c="white" size="lg">最新優惠</Text>
          </Container>
        );
}