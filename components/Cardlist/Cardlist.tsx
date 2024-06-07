import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


export default function Cardlist() {
  return (
    <Group grow style={{ overflow: 'auto', padding: '20px' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ flex: 1 }}>
        <Card.Section>
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

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="outline" color="blue" fullWidth mt="md" radius="lg">
          立即登記
        </Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ flex: 1 }}>
        <Card.Section>
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

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="outline" color="blue" fullWidth mt="md" radius="lg">
          立即登記
        </Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ flex: 1 }}>
        <Card.Section>
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

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="outline" color="blue" fullWidth mt="md" radius="lg">
          立即登記
        </Button>
      </Card>
    </Group>
  );
}