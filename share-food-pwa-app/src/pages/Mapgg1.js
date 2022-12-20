import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Map1 from "../components/Map/Map1";
const Mapgg1 = () => {
  return (
    <ChakraProvider theme={theme}>
      <Map1 />
    </ChakraProvider>
  );
};

export default Mapgg1;
