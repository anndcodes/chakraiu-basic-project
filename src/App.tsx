// import { div } from 'framer-motion/client'
// import './App.css'
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";

import {
  Box,
  Flex,
  Stack,
  VStack,
  HStack,
  StackDivider,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { div } from "framer-motion/client";

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
    </div>
  );
}

export default App;
