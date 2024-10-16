import { useEffect, useRef, useState } from 'react';
import { AppShell, Center, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderMegaMenu from '@/components/Header/Header';
import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel';
import Footer from '@/components/Footer/Footer';
import Discount from '@/components/Discount/Discount';
import Instagram from '@/components/Instagram/Instagram';
import Script from 'next/script';
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
      <Script
        strategy="afterInteractive"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />

      <Script id="gpt-init-desktop" strategy="afterInteractive">
        {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/22000485675/ros_desktop_728x90', [728, 90], 'div-gpt-ad-1728872282390-0').setTargeting('position', ['top']).addService(googletag.pubads());
            googletag.defineSlot('/22000485675/ros_desktop_728x90', [728, 90], 'div-gpt-ad-1728872308893-0').setTargeting('position', ['middle']).addService(googletag.pubads());
            googletag.defineSlot('/22000485675/ros_desktop_728x90', [728, 90], 'div-gpt-ad-1728876526423-0').setTargeting('position', ['bottom']).addService(googletag.pubads());
            googletag.defineSlot('/22000485675/ros_desktop_970x250', [970, 250], 'div-gpt-ad-1728872531921-0').setTargeting('position', ['top']).addService(googletag.pubads());
            googletag.defineSlot('/22000485675/ros_desktop_970x250', [970, 250], 'div-gpt-ad-1728872550749-0').setTargeting('position', ['middle']).addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().setTargeting('environment', ['desktop']).setTargeting('section', ['category']).setTargeting('content_category', ['dynamic_content_category']);
            googletag.enableServices();
          });
        `}
      </Script>
      <AppShell.Header>

        <HeaderMegaMenu />
      </AppShell.Header>
      <AppShell.Main>
        <Center style={{ minHeight: '250px', marginTop: '1rem' }}>
          <div id="div-gpt-ad-1728872531921-0" style={{ minWidth: '970px', minHeight: '250px' }}>
            <Script id="gpt-display-top-970x250" strategy="afterInteractive">
              {"googletag.cmd.push(function() { googletag.display('div-gpt-ad-1728872531921-0'); });"}
            </Script>
          </div>
        </Center>
        <br />
        <br />
        <FoodBanner />
        <br />
        <FoodCard />
        <br />
        <Center style={{ minHeight: '90px', marginTop: '1rem' }}>
          <div id="div-gpt-ad-1728872282390-0" style={{ minWidth: '728px', minHeight: '90px' }}>
            <Script id="gpt-display-top-728x90" strategy="afterInteractive">
              {"googletag.cmd.push(function() { googletag.display('div-gpt-ad-1728872282390-0'); });"}
            </Script>
          </div>
        </Center>
        <br />
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
        <Center style={{ minHeight: '250px', marginTop: '1rem' }}>
          <div id="div-gpt-ad-1728872550749-0" style={{ minWidth: '970px', minHeight: '250px' }}>
            <Script id="gpt-display-middle-970x250" strategy="afterInteractive">
              {"googletag.cmd.push(function() { googletag.display('div-gpt-ad-1728872550749-0'); });"}
            </Script>
          </div>
        </Center>
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
        <Center style={{ minHeight: '90px', marginTop: '1rem' }}>
          <div id="div-gpt-ad-1728876526423-0" style={{ minWidth: '728px', minHeight: '90px' }}>
            <Script id="gpt-display-bottom-728x90" strategy="afterInteractive">
              {"googletag.cmd.push(function() { googletag.display('div-gpt-ad-1728876526423-0'); });"}
            </Script>
          </div>
        </Center>
        <br />
        <br />
        <br />
        <div ref={sentinelRef} style={{ height: '1px' }}></div> {/* Sentinel div */}
      </AppShell.Main>
      {footerVisible && <AppShell.Footer><Footer /></AppShell.Footer>}
    </AppShell>
  );
}
