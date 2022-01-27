import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer"
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box maxWidth="100%">
      <Header />
      <MainContent />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default App;
