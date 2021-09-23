import React from 'react';
import { Box, Button, Text, Image, Center } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Box backgroundColor="#FFA8E2" w="100%" position="relative" h="70vh">
            <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
                h="100%" m="auto" objectFit="contain"
                objectPosition={["top", "center"]}
            />
            <Text
                className="tracking-in-expand"
                position="absolute"
                bottom="20"
                w="100%"
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize="4rem"
            >
                Bath Bombs By Tom
            </Text>
            <Center>
                <Button
                    w="10rem" backgroundColor="#FF38BD" color="white"
                    _hover={{ opacity: "70%" }} position="absolute" bottom="5%"
                >
                    Shop Now
                </Button>
            </Center>
        </Box>
    )
}

export default Hero
