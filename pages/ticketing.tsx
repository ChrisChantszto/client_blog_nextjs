import React from 'react';
import { MantineProvider, Container, Title, Grid, Card, Text, Button, Group } from '@mantine/core';

export default function Ticketing() {
  const tickets = [
    { id: 1, name: "1-Day Ticket", price: 109, description: "Valid for one day at Disneyland" },
    { id: 2, name: "2-Day Ticket", price: 199, description: "Valid for two consecutive days at Disneyland" },
    { id: 3, name: "3-Day Ticket", price: 289, description: "Valid for three consecutive days at Disneyland" },
  ];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="lg" py="xl">
        <Title order={1} align="center" mb="xl">Disneyland Tickets</Title>
        <Grid>
          {tickets.map((ticket) => (
            <Grid.Col key={ticket.id} span={12} sm={6} md={4}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Title order={3} align="center" mt="md">{ticket.name}</Title>
                </Card.Section>
                <Text size="sm" color="dimmed" mt="sm">
                  {ticket.description}
                </Text>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Price: ${ticket.price}</Text>
                  <Button
                    variant="light"
                    color="blue"
                    className="snipcart-add-item"
                    data-item-id={ticket.id}
                    data-item-name={ticket.name}
                    data-item-price={ticket.price}
                    data-item-description={ticket.description}
                    data-item-url="/tickets"
                  >
                    Add to cart
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </MantineProvider>
  );
}