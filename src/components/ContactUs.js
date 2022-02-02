import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, phone, email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    console.log("submitted");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box m="2vw">
      <Text
        width="100%"
        textAlign={{ base: "center", lg: "center" }}
        fontFamily="Libre bakersville"
        fontSize={{ base: "3vh", lg: "4vh" }}
        pt="4vh"
        pb="4vh"
        lineHeight="150%"
      >
        Contact us using this form below.
      </Text>
      <Box width="100%" display="flex" justifyContent="center" pt="2vh">
        <form
          method="post"
          dataNetlify="true"
          name="contact"
          onSubmit={handleSubmit}
        >
          <FormControl
            method="post"
            dataNetlify="true"
            name="contact"
            isRequired
            boxShadow="0 4px 6px 0 hsla(0, 0%, 0%, 0.2)"
            width={{ base: "90vw", md: "60vw", lg: "30vw" }}
            border="3px solid rgba(43, 59, 43, 0.6)"
            p="2vh"
            borderRadius="2vh"
            mb="4vh"
          >
            <Input type="hidden" name="contract" value="contact" />
            <FormLabel htmlFor="name" pt="1vh" borderRadius="2vh">
              Name
            </FormLabel>
            <Input id="name" value={name} onChange={handleNameChange} />
            <FormLabel id="phone-number" htmlFor="number">
              Phone number
            </FormLabel>
            <Input
              id="phone-number"
              type="number"
              value={phone}
              onChange={handlePhoneChange}
            />
            <FormLabel htmlFor="email" pt="1vh">
              Email address
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <FormLabel htmlFor="message" pt="1vh">
              Message
            </FormLabel>
            <Textarea
              id="message"
              mb="1vh"
              value={message}
              onChange={handleMessageChange}
            ></Textarea>
            <Button
              type="submit"
              onSubmit={handleSubmit}
              mt="2vh"
              bgColor="rgba(43, 59, 43)"
              color="white"
              id="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
