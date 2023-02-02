'use client'
import { Box,Text } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";


export default function Home(){
    return(
        <ChakraProvider>
            <Box bg='black'>
                <Text color='white'  marginLeft='20px'> my text </Text>
            </Box>
        </ChakraProvider>
    )
}