import { Container, Title, Card, Text, Group, Button } from '@mantine/core';

export default function MembershipCard() {
  return (
    <Container fluid style={{ backgroundColor: '#F2EFEA', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card 
        padding="xl" 
        radius="md"
        style={{ 
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center',
        }}
      >
        <Title order={2} style={{ marginBottom: '2rem', color: '#FF6031' }}>
          會員系統
        </Title>
        
        <Text size="xl" style={{ marginBottom: '2rem' }}>
          會員系統將會在未來開放
        </Text>
        
        <Group justify="center">
          <Button 
            color="#FF6031"
            size="lg"
            onClick={() => window.history.back()}
          >
            返回上一頁
          </Button>
        </Group>
      </Card>
    </Container>
  );
}