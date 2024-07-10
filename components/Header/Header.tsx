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
  Image,
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

const logoUrl = 'https://playeateasy.com/wp-content/uploads/2022/10/橫pee-logo-1-1.gif';

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
        <a href="https://www.playeateasy.com/">
          <img src={logoUrl} alt="Your Logo" style={{ height: 30, cursor: 'pointer' }} />
        </a>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/jetso" className={classes.link} color="#222222">
              優惠減價
            </a>
            <a href="/membership" className={classes.link} color="#222222">
              會員活動
            </a>
            <a href="/play" className={classes.link} color="#222222">
              玩樂
            </a>
            <a href="/food" className={classes.link} color="#222222">
              飲食
            </a>
            <a href="/shopping" className={classes.link} color="#222222">
              購物
            </a>
            <a href="/entertainment" className={classes.link} color="#222222">
              娛樂熱話
            </a>
            <a href="/life" className={classes.link} color="#222222">
              愛生活
            </a>
            <a href="/travel" className={classes.link} color="#222222">
              旅遊
            </a>
            <a href="#" className={classes.link} color="#222222">
              北上旅遊
            </a>
          </Group>

          
          <Group gap="xl">
            {/* <IconSearch color='#FF6031' /> */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#FF6031" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Button color="#FF6031" radius="xl" leftSection={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.067 4 8.5 5.567 8.5 7.5C8.5 9.433 10.067 11 12 11C13.933 11 15.5 9.433 15.5 7.5C15.5 5.567 13.933 4 12 4ZM6.5 7.5C6.5 4.46243 8.96244 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5C17.5 10.5376 15.0376 13 12 13C8.96244 13 6.5 10.5376 6.5 7.5ZM12 17C8.8088 17 5.89333 18.389 3.7276 20.686C3.34873 21.0878 2.71584 21.1065 2.314 20.7276C1.91216 20.3487 1.89353 19.7158 2.2724 19.314C4.77826 16.6562 8.20523 15 12 15C15.7948 15 19.2217 16.6562 21.7276 19.314C22.1065 19.7158 22.0878 20.3487 21.686 20.7276C21.2842 21.1065 20.6513 21.0878 20.2724 20.686C18.1067 18.389 15.1912 17 12 17Z" fill="white"/>
              </svg>
            }>登入
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Play Eat Easy - 玩食易"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            主頁
          </a>

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
          <a href="/jetso" className={classes.link}>
            優惠減價
          </a>
          <a href="/membership" className={classes.link}>
            會員活動
          </a>
          <a href="/play" className={classes.link}>
            玩樂
          </a>
          <a href="/food" className={classes.link}>
            飲食
          </a>
          <a href="/shopping" className={classes.link}>
            購物
          </a>
          <a href="/entertainment" className={classes.link}>
            娛樂熱話
          </a>
          <a href="/life" className={classes.link}>
            愛生活
          </a>
          <a href="/travel" className={classes.link}>
            旅遊
          </a>
          <a href="#" className={classes.link}>
            北上旅遊
          </a>

        </ScrollArea>
      </Drawer>
    </Box>
  );
}
