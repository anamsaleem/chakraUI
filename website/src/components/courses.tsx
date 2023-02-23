"use client";
import React from "react";
import {
  Box,
  Text,
  ChakraProvider,
  Heading,
  Flex,
  Image,
  Grid,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const Images = [
  { src: "AI RED.png", alt: "Image 1", name: "ARTIFICAL INTELLIGENCE" },
  { src: "blockchain red.png", alt: "Image 2", name: "BLOCKCHAIN" },
  { src: "red meta3.png", alt: "Image 3", name: "METAVERSE" },
];

export default function Courses() {
  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-t,#c44c66, #ffffff)">
        <Box color="black">
          <Flex justifyContent="center">
          <Heading
            padding="5"
            mb={8}
            fontFamily="monospace"
            fontSize="30px"
            fontWeight="bold"
            textAlign="center"
         >Courses</Heading>
          </Flex>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {Images.map((image, index) => (
            <Box
              key={index}
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
                src={image.src}
                alt={image.alt}
              />
              <Text padding="5" fontSize="25" fontFamily="sans-serif">
                {image.name}{" "}
                <Link href="https://www.piaic.org/">
                  <Button
                    border="1px"
                    borderColor="gray.500"
                    padding="5"
                    alignSelf="center"
                    my="20px"
                    mx="20px"
                    _hover={{ backgroundColor: "lightgray" }}
                  >
                    Click Here
                  </Button>
                </Link>
              </Text>
            </Box>
          ))}
        </Grid>
        <Box padding='20'>
        <Heading
            padding="5"
            mb={8}
            fontFamily="monospace"
            fontSize="30px"
            fontWeight="bold"
            textAlign="center"
         >Core Courses (Common in All Specializations):</Heading>
          <Text>
            Every participant of the program will start by completing the
            following three core courses:
           
            <Text>
              Quarter I (Core) CS-101: Object-Oriented Programming using
              TypeScript
            </Text>
            <Text>
              Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
              Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud
              Development Kit (CDK) for Terraform{" "}
            </Text>
            <Text>
              Quarter III (Core) $-101: Dollar Making Bootcamp - Full-Stack
              Template and API Product Development
            </Text>
            </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
