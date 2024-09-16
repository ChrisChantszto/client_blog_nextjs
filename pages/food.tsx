import { useEffect, useRef, useState } from 'react';
import { AppShell, Center, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderMegaMenu from '@/components/Header/Header';
import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel';
import Footer from '@/components/Footer/Footer';
import Discount from '@/components/Discount/Discount';
import Instagram from '@/components/Instagram/Instagram';
import FoodPostlist from '@/components/Postlist/FoodPostlist';
import FoodCard from '@/components/Cardlist/FoodCard';
import FoodBanner from '@/components/Categories/FoodBanner';
import FoodCampaignBlog from '@/components/Campaignblog/FoodCampaignblog';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import Youtube from '@/components/Youtube/Youtube';

export default function Food() {
  const [opened, { toggle }] = useDisclosure();
  const [footerVisible, setFooterVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setFooterVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <AppShell.Header>

        <HeaderMegaMenu />
      </AppShell.Header>
      <AppShell.Main>
        <FoodBanner />
        <br />
        <FoodCard />
        <br />
        <FoodPostlist />
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
        <FoodCampaignBlog />
        <br />
        <br />
        <br />
        <br />
        {/* <Instagram /> */}
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
        <div ref={sentinelRef} style={{ height: '1px' }}></div> {/* Sentinel div */}
      </AppShell.Main>
      {footerVisible && <AppShell.Footer><Footer /></AppShell.Footer>}
    </AppShell>
  );
}
