import React from "react";
import Script from "next/script";
import YouTube from "react-youtube";
import { Center, Container, Title, Text, Button, Box, SimpleGrid } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function Youtube() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const opts = {
        height: '190',
        width: isMobile ? '100%' : '300',
    };

    const handleButtonClick = () => {
        window.open('https://www.youtube.com/channel/UCAs4cR685Txuk3zSvhMsnEA', '_blank');
    };

    const videoIds = ["ytQkFr9C3xo", "jDhuIOVygzQ", "D7Lzyjh-nNs"];

    return (
        <Container fluid style={{ backgroundColor: '#E9E3D9', minHeight: '700px', padding: isMobile ? '40px 20px' : '40px 120px' }}>
            <Box mb={40}>
                <Center>
                    <div style={{ textAlign: 'center' }}>
                        <Title fw={800} order={1} c="#FF6031" style={{ marginBottom: '8px' }}>YOUTUBE VIDEO</Title>
                        <Title fw={800} order={2} c="black">更多影片</Title>
                    </div>
                </Center>
            </Box>
            
            <SimpleGrid 
                cols={isMobile ? 1 : 3} 
                spacing={isMobile ? "xl" : 50} 
                verticalSpacing={isMobile ? "xl" : "md"}
                style={{ maxWidth: '1200px', margin: '0 auto' }}
            >
                {(isMobile ? [videoIds[0]] : videoIds).map((videoId) => (
                    <Center key={videoId}>
                        <YouTube videoId={videoId} opts={opts} />
                    </Center>
                ))}
            </SimpleGrid>
            
            <Center mt={40}>
                <Button 
                    variant="filled" 
                    color="#FF6031" 
                    radius="xl" 
                    onClick={handleButtonClick} 
                    size={isMobile ? "md" : "xl"}
                >
                    <Text size={isMobile ? "md" : "xl"}>更多影片</Text>
                    <IconArrowRight />
                </Button>
            </Center>
        </Container>
        
    );
}