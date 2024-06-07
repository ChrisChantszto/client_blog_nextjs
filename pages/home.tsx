import { AppShell, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderMegaMenu from '@/components/Header/Header';
import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel';
import Discount from '@/components/Discount/Discount';
import Cardlist from '@/components/Cardlist/Cardlist';
import Postlist from '@/components/Postlist/Postlist';
import Campaignblog from '@/components/Campaignblog/Campaignblog';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <HeaderMegaMenu />
      </AppShell.Header>
      <AppShell.Main>
        <PhotoCarousel />
        <br />
        <Discount />
        <br />
        <Cardlist />
        <br />
        <Postlist />
        <br />
        <Campaignblog />
      </AppShell.Main>
    </AppShell>
  );
}