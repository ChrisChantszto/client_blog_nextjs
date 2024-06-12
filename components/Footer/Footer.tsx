import { Anchor, Group, ActionIcon, rem, Center, Stack, Container, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterCentered.module.css';

export default function Footer() {
    return (
        <Container fluid h={88} style={{ backgroundColor: '#433D33', height: '50px' }}>
            <Center>
                <Stack>
                    <Text c="white" ta="center">Copyright © 2024 |  Lab20 Limited  | All rights reserved.</Text>
                    <Text c="white" ta="center">關於我們 | 廣告查詢 | 工作機會</Text>
                </Stack>
            </Center>
        </Container>
    )
}