"use client";
import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  ChakraProvider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Flex
      bg="gray.200"
      margin="2"
      bgGradient="linear(to-t,#c44c66, #ffffff,#c44c66)"
    >
      <Flex flex={1} m="auto">
        <Image
          src={"/panaverse_transparent_small.png"}
          alt={"pic"}
          height="200"
          width="200"
        />
        <Heading
          paddingTop="20"
          paddingLeft="80"
          color="#54232a"
          textAlign="center"
          fontSize="50"
          fontFamily="sans-serif"
          fontWeight="extrabold"
        >
          {" "}
          Panaverse
        </Heading>
      </Flex>

      <Grid
        gap={6}
        templateColumns="repeat(4, 1fr)"
        marginTop="20"
        marginRight="45"
      >
        <GridItem
          border="1px solid gray"
          _hover={{ bg: "gray.100" }}
          h="30px"
          w="80%"
        >
          <Link href="/home">About</Link>
        </GridItem>
        <GridItem
          border="1px solid gray"
          _hover={{ bg: "gray.100" }}
          h="30px"
          w="100%"
        >
          <Link href="/team">Team</Link>
        </GridItem>
        <GridItem
          border="1px solid gray"
          _hover={{ bg: "gray.100" }}
          h="30px"
          w="100%"
        >
          <Link href="/courses">Courses</Link>
        </GridItem>
        <GridItem
          border="1px solid gray"
          _hover={{ bg: "gray.100" }}
          h="30px"
          w="100%"
        >
          <Link href="/quarter">Quarter</Link>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const Home2 = () => {
  return (
    <ChakraProvider>
      <Box p={4} bgGradient="linear(to-t, #ffffff,#c44c66)">
        <NavBar />
        <Heading
          padding="5"
          mb={8}
          fontFamily="monospace"
          fontSize="30px"
          fontWeight="bold"
          textAlign="center"
        >
          PIAIC Panaverse
        </Heading>
        <Flex mb={8}>
          <Image
            src="red meta.png"
            alt="An example image related to the text"
            mr={8}
            boxShadow='base'
      borderRadius='3xl'
          />
          <Text fontSize="xl">
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more. Citi is the latest Wall Street business to give
            a positive prognosis for Web 3.0 and the Metaverse, terms used to
            depict a future internet vision centered on decentralized
            technologies and virtual worlds. Citi stated in a March 2022
            research paper that the metaverse economy might have a total
            addressable market of up to $13 trillion and five billion people by
            2030.
          </Text>
        </Flex>
        <Flex mb={8}>
          <Heading
            padding="5"
            mb={8}
            fontFamily="monospace"
            fontSize="30px"
            fontWeight="bold"
            textAlign="center"
          >
            Program Nutshell
          </Heading>
          <Text fontSize="xl">
            The Program in a Nutshell: Earn While You Learn In this brand-new
            type of curriculum, students will learn how to make money and boost
            exports in the classroom and will begin doing so within six months
            of the program's beginning. It resembles a cross between a corporate
            venture and an educational project.
          </Text>
          <Image
            
            src="red meta2.png"
            alt="An example image related to the text"
            mr={8}
            boxShadow='base'
            borderRadius='3xl'
          />
        </Flex>
        <Flex>
        <Heading
            padding="5"
            mb={8}
            fontFamily="monospace"
            fontSize="30px"
            fontWeight="bold"
            textAlign="center"
          >
            Program of Studies
          </Heading>
          <Text fontSize="xl">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>
          </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Home2;
