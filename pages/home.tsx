import { AppShell, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderMegaMenu from '@/components/Header/Header';
import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel';
import Footer from '@/components/Footer/Footer';
import Discount from '@/components/Discount/Discount';
import Cardlist from '@/components/Cardlist/Cardlist';
import Postlist from '@/components/Postlist/Postlist';
import Campaignblog from '@/components/Campaignblog/Campaignblog';
import Youtube from '@/components/Youtube/Youtube';

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
        <br />
        <Cardlist />
        <br />
        <Postlist />
        <br />
        <Campaignblog />
        <br />
        <br />
        <br />
        <br />
        <Youtube />
        <br />
        <br />
        <br />
        <br />
      </AppShell.Main>
      <AppShell.Footer><Footer /></AppShell.Footer>
    </AppShell>
  );
}