import {React, useState} from "react";
import {
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import "@fontsource/libre-baskerville";
import "@fontsource/source-sans-pro";

const ContactUs = () => {
  const [inputChange, setInputChange] = useState('')
  const formHandler = (event) => event.preventDefault();
  console.log("form submitted");
  const handleInputChange = (event) => {let inputValue = event.target.value
  setInputChange(inputValue) }


  return (
    <Box m="2vh">
      <Text
        width="100%"
        textAlign={{ base: "center", lg: "center" }}
        fontFamily="Source Sans Pro"
        fontSize={{ base: "3vh", lg: "4vh" }}
        pt="4vh"
        pb="4vh"
        lineHeight="150%"
      >
        Contact us using this form below, or you can find our contact
        information on the bottom of the page.
      </Text>
      <Box width="100%" display="flex" justifyContent="center" pt="2vh">
        <FormControl
          isRequired
          boxShadow="0 4px 6px 0 hsla(0, 0%, 0%, 0.2)"
          width={{ base: "90vw", md: "60vw", lg: "30vw" }}
          border="3px solid rgba(43, 59, 43, 0.6)"
          p="2vh"
          borderRadius="2vh"
          mb="4vh"
          onSubmit={formHandler}
        >
          <FormLabel htmlFor="first-name" pt="1vh" borderRadius="2vh">
            First name
          </FormLabel>
          <Input id="first-name" />
          <FormLabel htmlFor="last-name" pt="1vh">
            Last name
          </FormLabel>
          <Input id="last-name" />
          <FormLabel htmlFor="email" pt="1vh">
            Email address
          </FormLabel>
          <Input id="email" type="email" />
          <FormLabel htmlFor="message" pt="1vh">
            Message
          </FormLabel>
          <Textarea id="message" mb="1vh" inputChange={inputChange} onChange={handleInputChange}></Textarea>
          <Button
            type="button"
            mt="2vh"
            bgColor="rgba(43, 59, 43)"
            color="white"
            id="submit"
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ContactUs;
