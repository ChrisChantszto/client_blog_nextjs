import React from "react";
import YouTube from "react-youtube";
import { Center, Container, Title, Text, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function Youtube() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const opts = isMobile
        ? {
            height: '190',
            width: '220',
        }
        : {
            height: '190',
            width: '350',
        };

    const handleButtonClick = () => {
        window.open('https://www.youtube.com/channel/UCAs4cR685Txuk3zSvhMsnEA', '_blank');
    };

    return (
        <Container fluid style={{ backgroundColor: '#E9E3D9', minHeight: '700px', paddingLeft: '120px', paddingRight: '120px' }}>
            <br />
            <br />
            <br />
            <Center>
                <Title fw={800} order={1} c="#FF6031">YOUTUBE VIDEO</Title>
            </Center>
            <Center>
                <Title fw={800} order={2} c="black">更多影片</Title>
            </Center>
            <br />
            <br />
            <Carousel
                height={isMobile ? 280 : 330}
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align="start"
                slidesToScroll={3}
            >
                <Carousel.Slide><YouTube videoId="ytQkFr9C3xo" opts={opts} /></Carousel.Slide>
                <Carousel.Slide><YouTube videoId="jDhuIOVygzQ" opts={opts} /></Carousel.Slide>
                <Carousel.Slide><YouTube videoId="D7Lzyjh-nNs" opts={opts} /></Carousel.Slide>
            </Carousel>
            <Center><Button variant="filled" color="#FF6031" radius="xl" onClick={handleButtonClick} size="xl"><Text size="xl">更多影片</Text><IconArrowRight /></Button></Center>
        </Container>
    );
}