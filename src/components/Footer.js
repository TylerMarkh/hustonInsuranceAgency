import React from 'react'
import { Box, Text} from "@chakra-ui/react";

import "@fontsource/libre-baskerville";
import "@fontsource/source-sans-pro";

const Footer = () => {
return (
<Box backgroundColor="rgba(43, 59, 43)">
    <Text  ml="2vh" pt="2vh" mb="2vh" fontSize="2.5vh" fontWeight="bold" color="white" borderBottom="2px solid" width="fit-content">Contact Us</Text>
    <Text ml="2vh" color="rgba(255, 255, 255, 0.9)" pb="1vh">Phone: xxx-xxx-xxx</Text>
    <Text ml="2vh" pb="2vh" color="rgba(255, 255, 255, 0.9)">Email: johndoe@gmail.com</Text>
</Box>
)
}

export default Footer