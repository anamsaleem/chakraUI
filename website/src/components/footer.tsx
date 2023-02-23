'use client'
import React from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.700" color="Black">
      <Flex justifyContent="center" py={8}>
        <Text fontSize="sm">
          © {new Date().getFullYear()} Your Company
        </Text>
        <Box mx={6}>|</Box>
        <Link href="#">Terms of Service</Link>
        <Box mx={6}>|</Box>
        <Link href="#">Privacy Policy</Link>
      </Flex>
    </Box>
  );
}
