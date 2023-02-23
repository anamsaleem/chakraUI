"use client";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Grid,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Team from "./team";

export default function Quarter() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  return (
    <ChakraProvider>
      <Box minWidth="sm" minHeight={showMore1 || showMore2 || showMore3 || showMore4 ? "auto" : "300px"}  bgGradient="linear(to-t ,  #ffffff,#c44c66)" padding="20px">
      <Heading
            padding="5"
            mb={8}
            fontFamily="monospace"
            fontSize="30px"
            fontWeight="bold"
            textAlign="center"
         >WEB 3.0</Heading>
        <Center>
         <Link textDecoration={"underline"} href="https://www.piaic.org/" >PIAIC</Link> 
        <Link href="/Team"></Link> 
        </Center>
        
       
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr) ",
            lg: "repeat(4, 1fr)",
          }}
          gap={10}>
          <Box>
            <Text>
            <Text textAlign='center' fontSize='20px' fontWeight='bold'>Quarter I</Text>
              {showMore1
                ? "Course Description: We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users."
                : "Quarter I (Core) Object-Oriented Programming using TypeScript"}
              {showMore1 ? "" : "..."}
            </Text>
            <Button onClick={() => setShowMore1(!showMore1)}>
              {showMore1 ? "Show Less" : "Read More"}
            </Button>
          </Box>
          <Box>
          <Text textAlign='center' fontSize='20px' fontWeight='bold'>Quarter II</Text>
            <Text>
              {showMore2
                ? "Course Description:The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF)"
                : "Quarter II (Core) Object-Oriented Programming using TypeScript"}
              {showMore2 ? "" : "..."}
            </Text>
            <Button onClick={() => setShowMore2(!showMore2)}>
              {showMore2 ? "Show Less" : "Read More"}
            </Button>
          </Box>
          <Box>
          <Text textAlign='center' fontSize='20px' fontWeight='bold'>Quarter III</Text>
            <Text>
              {showMore3
                ? "Course Description:You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. "
                : "Quarter III (Core) Object-Oriented Programming using TypeScript"}
              {showMore3 ? "" : "..."}
            </Text>
            <Button onClick={() => setShowMore3(!showMore3)}>
              {showMore3 ? "Show Less" : "Read More"}
            </Button>
          </Box>
          <Box>
          <Text textAlign='center' fontSize='20px' fontWeight='bold'>Quarter IV</Text>
            <Text>
              {showMore4
                ? "Course Description: In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters. "
                : "Quarter IV (Core) Object-Oriented Programming using TypeScript"}
              {showMore4 ? "" : "..."}
            </Text>
            <Button onClick={() => setShowMore4(!showMore4)}>
              {showMore4 ? "Show Less" : "Read More"}
            </Button>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
