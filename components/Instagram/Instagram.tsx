import React from "react";
import YouTube from "react-youtube";
import { Center, Container, Title, Text, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight } from "@tabler/icons-react";

export default function Instagram() {

    const opts = {
        height: '280',
        width: '520',
 
    };

    return (
        <Container fluid style={{ backgroundColor: 'white', minHeight: '700px' }}>
            <Center>
                <Title fw={800} order={1} c="#FF6031">INSTAGRAM</Title>
            </Center>
            <Center>
                <Title fw={800} order={2} c="black">最新貼文</Title>
            </Center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Center><Button variant="filled" color="#FF6031" radius="xl"><Text size="xl">查看更多</Text><IconArrowRight /></Button></Center>
        </Container>
    );
}
