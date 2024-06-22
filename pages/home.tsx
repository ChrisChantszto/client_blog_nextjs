import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderMegaMenu from '@/components/Header/Header';
import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel';
import Footer from '@/components/Footer/Footer';
import Discount from '@/components/Discount/Discount';
import Cardlist from '@/components/Cardlist/Cardlist';
import Instagram from '@/components/Instagram/Instagram';
import Postlist from '@/components/Postlist/Postlist';
import Campaignblog from '@/components/Campaignblog/Campaignblog';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import Youtube from '@/components/Youtube/Youtube';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      style={{ backgroundColor: '#F5F5F5' }}
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
        <Instagram />
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <img
            src="https://iili.io/dH2SmEg.jpg"
            alt="Banner"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <div style={{ position: 'absolute', bottom: '60px', right: '60px', display: 'flex', gap: '2.5rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IconBrandFacebook size={60} color="white" style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IconBrandInstagram size={60} color="white" style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <IconBrandYoutube size={60} color="white" style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }} />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </AppShell.Main>
      <AppShell.Footer><Footer /></AppShell.Footer>
    </AppShell>
  );
}
