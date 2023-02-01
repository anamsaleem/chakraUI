'use client'
import React from "react";
import { ChakraProvider,Box,Text, Heading, Flex, Button, HStack, Icon, StackProps, Stack, ListItem, List} from "@chakra-ui/react";
import CheckIcon from "@/Icons/icon";



export const ItemList=(props: StackProps) =>{
    const {children,...rest} =props;
    return(
       
        <HStack as='li' spacing='20px' {...rest} alignItems='start'>
            <Icon as={CheckIcon} w='22px' h='22px'/>
            <Text textAlign={['left','left','center']}>{children}</Text>
        </HStack>
       
        
    )
}


export default function Price(){
    return(

    <ChakraProvider>
    <Box mx='6'>
        <Box maxW='994px' margin='auto' mt='-256' borderRadius='12px' overflow='hidden' boxShadow='dark-lg'>
            <Flex direction={['column','column','row']}> 
                <Box bg='#bbadc4' p='60px'>
                    <Text fontWeight='800' fontSize='24px'>Premium PRO
                    <Heading as='h3' fontSize={['5xl','5xl','6xl']} mt='16px'>$345</Heading>
                    </Text>
                    <Text color='#171923'fontSize='18px' fontWeight='500' marginTop='8px'>Billed Just Once</Text>
                    <Button colorScheme='purple' size='lg' w='282px' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text textAlign='left'>Access these features when you get this pricing packges for busniess</Text>
                    <Stack as='ul' spacing ='20px' pt='24px'>
                       <ItemList> International calls and message API</ItemList>
                       <ItemList> Addtional Phone number</ItemList>
                       <ItemList> Automated message via Zapier</ItemList>
                       <ItemList>24/7 support and consulting</ItemList>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    </Box>
    </ChakraProvider>
    )
}