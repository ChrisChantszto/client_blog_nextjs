import { Text, Title, Divider, Image, Stack, Button, Grid, Badge } from "@mantine/core";

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
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            h={200}
                            w="auto"
                            fit="contain"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                        />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Badge color="#FF6031">最新</Badge>
                        <Title order={5}>May 09, 2024  / By Venus Law</Title>
                        <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            h={200}
                            w="auto"
                            fit="contain"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                        />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Badge color="#FF6031">最新</Badge>
                        <Title order={5}>May 09, 2024  / By Venus Law</Title>
                        <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            h={200}
                            w="auto"
                            fit="contain"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                        />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Badge color="#FF6031">最新</Badge>
                        <Title order={5}>May 09, 2024  / By Venus Law</Title>
                        <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={4}>
                        <Image
                            radius="md"
                            h={200}
                            w="auto"
                            fit="contain"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                        />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Badge color="#FF6031">最新</Badge>
                        <Title order={5}>May 09, 2024  / By Venus Law</Title>
                        <Title order={2}>九龍海逸君綽酒店$88起歎海雲天點心！飽覽210度維港景色＋10大至尊點心連＋任食番石榴甘露糖水</Title>
                    </Grid.Col>
                </Grid>
            </Stack>
        </>
    )
}