"use client";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Button, ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/dist/client/link";

const ButtonWrapper = styled(Button)`
  flex-direction: row;
  min-width: 120px;
  border: 1px solid gray;
  border-radius: 20px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
export default function Home() {
  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-t, green.200, pink.500)">
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr) ",
            lg: "repeat(1, 1fr)",
          }}
          gap={10}
        >
          <Box color="white">
            <Image
              src={"/panaverse_transparent_small.png"}
              alt={"pic"}
              height="10"
              width="200"
            ></Image>
          </Box>
          <Box
            marginLeft="auto"
            marginTop="-150"
            marginRight="auto"
            borderRadius="20px"
            padding="50px"
            bgGradient="linear(to-t, green.300, pink.600)"
            height="100px"
            width="700px"
            _hover={{ cursor: "pointer", bg: "#e8dfdf" }}
            justifyContent="center"
          >
            <Stack
              spacing="10px"
              justifyContent="space-evenly"
              alignItems="center"
              height="100%"
              width="30"
              flexDirection="row"
            >
            <Link href={"/Team"}> <ButtonWrapper>About</ButtonWrapper></Link> 
              <ButtonWrapper>Courses</ButtonWrapper>
              <ButtonWrapper>Quarter Detail</ButtonWrapper>
              <ButtonWrapper>Team</ButtonWrapper>
              <ButtonWrapper>Contact</ButtonWrapper>
            </Stack>
          </Box>

          <Flex
            padding="40px"
            flexDirection={{ sm: "column", md: "row" }}
            alignItems="center"
          >
            <Box>
              <Heading>Panaverse</Heading>
              <Text padding="20" fontSize="25" fontFamily="sans-serif">
                The internet is without a doubt the most important technological
                development in human history. Web3, 3D Metaverse, AI, IoT,
                Cloud, and Edge technologies expand the internet as we know it
                by introducing novel features and advancements. Metaverse will
                make use of all aspects of modern technology, including 3D, VR,
                AR, AI, blockchain, cloud and edge computing, voice computing,
                ambient computing, and more. Citi is the latest Wall Street
                business to give a positive prognosis for Web 3.0 and the
                Metaverse, terms used to depict a future internet vision
                centered on decentralized technologies and virtual worlds. Citi
                stated in a March 2022 research paper that the metaverse economy
                might have a total addressable market of up to $13 trillion and
                five billion people by 2030.
              </Text>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
