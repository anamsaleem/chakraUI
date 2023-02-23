'use client'
import React from "react";
import { Box, Text, ChakraProvider, Heading, Flex, Image, Badge, Grid, useMediaQuery } from "@chakra-ui/react";

export default function Team() {
  const data = [
    { name: "Zya Khan",title: "Lead Developer",image: "zya.png", bio:  "He has been working in the software development industry for over 10 years. He has a strong background in both front-end and back-end development, and is skilled in multiple programming languages." },
    { name: "Usaman",title: "Designer", image: "usman.png", bio: "He is an experienced designer with a focus on user experience and interface design. She has worked with a variety of clients in various industries, and is passionate about creating beautiful and functional designs." },
    { name: "Waniya", title: "Project Manager",image: "wania.png", bio: "She is an experienced designer with a focus on user experience and interface design. She has worked with a variety of clients in various industries, and is passionate about creating beautiful and functional designs." },
  ];


  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-t , ,#c44c66, #ffffff)">
        <Box color="black">
          <Flex justifyContent="center">
          <Heading
            padding="5"
            mb={8}
            fontFamily="monospace"
            fontSize="30px"
            fontWeight="bold"
            textAlign="center"
         >Panaverse Team</Heading>
          </Flex>
        </Box>
        <Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {data.map((person) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="20px"
                overflow="hidden"
                alignItems="center"
                my="20px"
                mx="20px"
                _hover={{ backgroundColor: "#e8dfdf" }}
              >
                <Image
                  borderRadius="full"
                  boxSize="200px"
                  src={person.image}
                  alt={person.name}
                />
                <Text padding="5" fontWeight='bold' fontSize="25" fontFamily="sans-serif">
                  {person.name}
                </Text>
                <Text padding="5" fontSize="20" fontWeight='bold' fontFamily="sans-serif">
                  {person.title}
                </Text>
                <Text padding="5" fontSize="20" fontFamily="sans-serif">
                  {person.bio}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
