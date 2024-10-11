import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      as="section"
      color='white'
      // bg="#6b46c1"
      bg='purple.500'
      pt="90px"
      pb="198px"
      textAlign="center"
    >
      <Heading fontWeight="800" fontSize="48px">
        Simple pricing for your business
      </Heading>

      <Text fontWeight="500" fontSize="24px" lineHeight="32px" pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
