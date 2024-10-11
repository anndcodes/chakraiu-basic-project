import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "./CheckIcon";

function ListItem({ text }) {
  return (
    <HStack as="li" spacing="20px">
      <CheckIcon />
      <Text>{text}</Text>
    </HStack>
  );
}

export function Pricing() {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="xl"
    >
      <Flex>
        <Box bg="purple.100" p="60px" align="center">
          <Text fontSize="24px" fontWeight="800">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18x" fontWeight="500" mt="8px">
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>

        <Box p="60px" fontSize="18px" bg="white">
          <Text textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem text="International calling and messaging API" />
            <ListItem text="Additional phone numbers" />
            <ListItem text="Automated messages via Zapier" />
            <ListItem text="24/7 support and consulting" />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
