// import React from "react";
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

function ListItem({text}:any) {
  return (
    <HStack as="li" spacing="5">
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
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
    >
      <Flex>
        <Box bg="purple.100" p="60px" textAlign='center'>
          <Text fontSize="2xl" fontWeight="extrabold">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="6xl" mt="16px">
            $329
          </Heading>
          <Text color="BlackAlpha600" fontSize="lg" fontWeight="medium" mt="8px">
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>

        <Box p="60px" fontSize="lg" bg="gray.50">
          <Text textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="5" pt="6">
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
