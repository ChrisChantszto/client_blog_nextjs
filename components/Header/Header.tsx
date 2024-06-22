import {
  Group,
  Button,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  UnstyledButton,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconUser,
  IconSearch,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

const logoUrl = 'https://staging-2015-sismapblog.wpcomstaging.com/wp-content/uploads/2024/05/cropped-cropped-play-eat-easy-logo.png';

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src={logoUrl} alt="Your Logo" style={{ height: 30, cursor: 'pointer' }} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="https://playeateasy.com/category/%e5%84%aa%e6%83%a0%e6%b8%9b%e5%83%b9/" className={classes.link} color="#222222">
              優惠減價
            </a>
            <a href="https://playeateasy.com/category/%e6%9c%83%e5%93%a1%e6%b4%bb%e5%8b%95/" className={classes.link} color="#222222">
              會員活動
            </a>
            <a href="https://playeateasy.com/category/%e7%8e%a9%e6%a8%82/" className={classes.link} color="#222222">
              玩樂
            </a>
            <a href="https://playeateasy.com/category/%e9%a3%b2%e9%a3%9f/" className={classes.link} color="#222222">
              飲食
            </a>
            <a href="https://playeateasy.com/category/%e8%b3%bc%e7%89%a9/" className={classes.link} color="#222222">
              購物
            </a>
            <a href="#" className={classes.link} color="#222222">
              娛樂熱話
            </a>
            <a href="#" className={classes.link} color="#222222">
              愛生活
            </a>
            <a href="#" className={classes.link} color="#222222">
              旅遊
            </a>
            <a href="#" className={classes.link} color="#222222">
              北上旅遊
            </a>
          </Group>

          
          <Group gap="xl">
            <IconSearch color='#FF6031' />
            <Button color="#FF6031" radius="xl" leftSection={<IconUser size={18} />}>登入</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {mockdata.map((item) => (
              <UnstyledButton className={classes.subLink} key={item.title}>
                <Group wrap="nowrap" align="flex-start">
                  <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                  </ThemeIcon>
                  <div>
                    <Text size="sm" fw={500}>
                      {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {item.description}
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            ))}
          </Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
