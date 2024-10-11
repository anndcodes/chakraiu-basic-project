import React from "react";
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import { CheckCircle } from "@phosphor-icons/react";

export function Pricing() {
  return (
    <Box>
      <Flex>
        <Box bg='purple.100' p='60px'>
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

        <Box></Box>
      </Flex>
    </Box>
  );
}
