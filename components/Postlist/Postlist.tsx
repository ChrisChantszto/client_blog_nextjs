import { Text, Title, Divider, Image, Stack, Button, Grid } from "@mantine/core";

export default function Postlist() {
    return(
        <>
            <Title fw={800} order={1} c="orange">SELECTED POST</Title>
            <Title fw={800} order={2}>精選文章</Title>
            <br />
            <Divider size="sm" />
            <br />
            <Stack
                h={300}
                bg="var(--mantine-color-body)"
                align="stretch"
                justify="flex-start"
                gap="lg"
            >
                <Grid>
                    <Grid.Col span={8}>
                        <Image
                            radius="md"
                            h={200}
                            w="auto"
                            fit="contain"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>2</Grid.Col>
                </Grid>
            </Stack>
        </>
    )
}