import React from "react";
import { Box, Text, ListItem, UnorderedList } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import "@fontsource/libre-baskerville";
import "@fontsource/source-sans-pro";

const MainContent = () => {
  return (
    <Box>
      <Box
        margin="2vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          textAlign={{ base: "center", md: "center", lg: "left" }}
          fontFamily="Source Sans Pro"
          fontSize={{ base: "3vh", lg: "5vh" }}
          pt="15vh"
          pl={{ base: "0vh", md: "0vh", lg: "4vh" }}
          pb={{ base: "0vh", md: "0vh", lg: "4vh" }}
          lineHeight="150%"
        >
          Located in Ohio and Michigan, Huston Insurance Agency's mission is to
          provide you with the facts about your Medicare Insurance. Our agents
          will personally meet with you to discuss your needs, and with a decade
          of experience, our lead agent will research the best options the
          market has to offer.
        </Text>

        <Text
          width="90%"
          textAlign={{ base: "center", lg: "left" }}
          fontFamily="Source Sans Pro"
          fontSize={{ base: "3vh", lg: "5vh" }}
          pt="2vh"
          pl="4vh"
          pb="15vh"
          lineHeight="150%"
        >
          Having an isurance agent will not only save you time, but will save
          you money.
        </Text>
      </Box>
      <Box
        display="flex"
        pt="5vh"
        flexDirection={{ base: "column", lg: "row" }}
        backgroundColor="rgba(43, 59, 43)"
      >
        <Text
          mb="2vh"
          fontFamily="Libre Bakersville"
          fontSize={{ base: "5vh", md: "5vh", lg: "6.5vh" }}
          width={{ base: "100%", lg: "50%" }}
          textAlign="center"
          pt={{ base: "0vh", lg: "25vh" }}
          pb={{ base: "0vh", lg: "25vh" }}
          color="rgba(255, 255, 255, 0.8)"
        >
          What we specialize in
        </Text>
        {window.innerWidth > 920 ? (
          <ChevronRightIcon
            color="white"
            w={12}
            h={12}
            mt={{ base: "0vh", lg: "27.5vh" }}
            ml={{ base: "20vh", lg: "0vh" }}
            mr="8vh"
          />
        ) : (
          <ChevronDownIcon
            alignSelf="center"
            color="white"
            w={12}
            h={12}
            mt={{ base: "0vh", lg: "27.5vh" }}
            ml={{ base: "0vh", lg: "0vh" }}
            mr={{ base: "0vh", md: "0vh", lg: "8vh" }}
          />
        )}

        <Box display="flex" alignItems="center" justifyContent="center">
          <UnorderedList
            spacing={4}
            mt="3vh"
            mr={{ base: "2vh", lg: "10vh" }}
            ml={{ base: "2vh", lg: "10vh" }}
            mb="7vh"
            p="4vh"
            pl="7vh"
            fontFamily="Source Sans Pro"
            borderRadius="2vh"
            border="2px solid white"
            color="rgba(255, 255, 255, 0.8)"
            fontSize="3.5vh"
            width="fit-content"
            height="fit-content"
            justifyContent="center"
          >
            <ListItem>Medicare Supplements</ListItem>
            <ListItem>Medicare Advantage</ListItem>
            <ListItem>Prescription Drug Plans</ListItem>
            <ListItem>Life Insurance</ListItem>
            <ListItem>Heart & Stroke</ListItem>
            <ListItem>Short Term Care</ListItem>
            <ListItem>Dental & Vision</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
