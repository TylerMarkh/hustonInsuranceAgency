import React from "react";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import backgroundImage from "./photos/backgroundImage.jpg";
import Icon from "./Icon";
import "@fontsource/libre-baskerville";
import "@fontsource/source-sans-pro";

const Header = () => {
  const contactUsHandler = () => {
    window.scrollTo({
      top: 4000,
      behavior: "smooth",
    });
    console.log("button pressed");
  };

  return (
    <Box
      backgroundImage={backgroundImage}
      bgWidth="100%"
      backgroundAttachment={{ sm: "", md: "fixed", lg: "fixed" }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box bgGradient="linear(to-t, #00000088 20%, #ffffff44 80%)">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box p={{ base: "2vw", lg: "4vh 0vh 2vh 4vh" }}>
            <Icon />
          </Box>
          <Menu>
            <MenuButton
              mr={{ base: "4vw", lg: "6vw" }}
              color="white"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem fontFamily="Source Sans Pro" onClick={contactUsHandler}>
                Contact Us
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Box
            pb={{ base: "6vh", lg: "11vh" }}
            pl={{ base: "1vw", lg: "2vw" }}
            pr={{ base: "1vw", lg: "0vw" }}
            pt={{ base: "54vh", md: "71vh", lg: "54vh" }}
          >
            <Text
              display="flex"
              textAlign="center"
              p="1vh"
              color="rgba(255,255, 255, 0.8)"
              width={{ base: "100%", lg: "87%" }}
              fontFamily="Libre Bakersville"
              fontSize={{ base: "5.3vh", md: "4.6vh", lg: "9vh" }}
              lineHeight="100%"
            >
              We make Medicare Insurance easy.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
