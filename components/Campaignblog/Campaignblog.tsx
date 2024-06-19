// import { Container, Title, Group, Card, Image, Text, Button, Badge } from '@mantine/core';
// import YouTube from 'react-youtube';
// import { Carousel } from '@mantine/carousel';

// export default function Campaignblog() {
//   const cardStyle = {
//     width: '390px',
//     height: '400px', // fixed height
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between'
//   };

//   return (
//     <Container fluid h={600} style={{ backgroundColor: '#433D33', height: '50px' }}>
//       <br />
//       <Title fw={800} order={1} px={30} c="white">CAMPAIGN BLOG</Title>
//       <Title fw={800} order={1} px={30} c="white">最新活動</Title>
//       <br />
//       <Carousel
//         withIndicators
//         height={450}
//         slideSize={{ base: '100%', sm: '50%', md: '23%' }}
//         slideGap={{ base: 0, sm: 'md' }}
//         loop
//         align="start"
//       >
//         <Carousel.Slide>
//           <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
//             <Card.Section component="a" href="https://mantine.dev/">
//               <Image
//                 src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
//                 height={160}
//                 alt="Norway"
//               />
//             </Card.Section>

//           <Group justify="space-between" mt="md" mb="xs">
//             <Text fw={500}>Norway Fjord Adventures</Text>
//             <Badge color="pink">On Sale</Badge>
//           </Group>

//           <Text size="sm" c="dimmed">
//             With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//             activities on and around the fjords of Norway
//           </Text>

//           <Button color="blue" fullWidth mt="md" radius="md">
//             Book classic tour now
//           </Button>
//         </Card>
//     </Carousel.Slide>
//     <Carousel.Slide>
//           <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
//             <Card.Section component="a" href="https://mantine.dev/">
//               <Image
//                 src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
//                 height={160}
//                 alt="Norway"
//               />
//             </Card.Section>

//           <Group justify="space-between" mt="md" mb="xs">
//             <Text fw={500}>Norway Fjord Adventures</Text>
//             <Badge color="pink">On Sale</Badge>
//           </Group>

//           <Text size="sm" c="dimmed">
//             With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//             activities on and around the fjords of Norway
//           </Text>

//           <Button color="blue" fullWidth mt="md" radius="md">
//             Book classic tour now
//           </Button>
//         </Card>
//     </Carousel.Slide>
//     <Carousel.Slide>
//           <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
//             <Card.Section component="a" href="https://mantine.dev/">
//               <Image
//                 src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
//                 height={160}
//                 alt="Norway"
//               />
//             </Card.Section>

//           <Group justify="space-between" mt="md" mb="xs">
//             <Text fw={500}>Norway Fjord Adventures</Text>
//             <Badge color="pink">On Sale</Badge>
//           </Group>

//           <Text size="sm" c="dimmed">
//             With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//             activities on and around the fjords of Norway
//           </Text>

//           <Button color="blue" fullWidth mt="md" radius="md">
//             Book classic tour now
//           </Button>
//         </Card>
//     </Carousel.Slide>
//         <Carousel.Slide>
//           <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
//             <Card.Section component="a" href="https://mantine.dev/">
//               <Image
//                 src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
//                 height={160}
//                 alt="Norway"
//               />
//             </Card.Section>

//           <Group justify="space-between" mt="md" mb="xs">
//             <Text fw={500}>Norway Fjord Adventures</Text>
//             <Badge color="pink">On Sale</Badge>
//           </Group>

//           <Text size="sm" c="dimmed">
//             With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//             activities on and around the fjords of Norway
//           </Text>

//           <Button color="blue" fullWidth mt="md" radius="md">
//             Book classic tour now
//           </Button>
//         </Card>
//     </Carousel.Slide>
//         <Carousel.Slide>
//         <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section component="a" href="https://mantine.dev/">
//         <Image
//           src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>

//       <Group justify="space-between" mt="md" mb="xs">
//         <Text fw={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink">On Sale</Badge>
//       </Group>

//       <Text size="sm" c="dimmed">
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button color="blue" fullWidth mt="md" radius="md">
//         Book classic tour now
//       </Button>
//     </Card>
//         </Carousel.Slide>
//         <Carousel.Slide>
//         <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section component="a" href="https://mantine.dev/">
//         <Image
//           src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>

//       <Group justify="space-between" mt="md" mb="xs">
//         <Text fw={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink">On Sale</Badge>
//       </Group>

//       <Text size="sm" c="dimmed">
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button color="blue" fullWidth mt="md" radius="md">
//         Book classic tour now
//       </Button>
//     </Card>
//         </Carousel.Slide>
//         {/* ...other slides */}
//       </Carousel>
//     </Container>
//   );
// }



import { Card, Image } from '@mantine/core';

const cardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
};

function Campaignblog() {
  return (
    <Card style={cardStyle} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" alt="Sample image" />
      </Card.Section>
    </Card>
  );
}

export default Campaignblog;