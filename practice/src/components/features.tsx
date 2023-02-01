'use client'
import React, { ElementType } from "react";
import { ChakraProvider,Box,Text, Heading, Flex, Button, HStack, Icon, StackProps, Stack, ListItem, List} from "@chakra-ui/react";
import CheckIcon from "@/Icons/icon";
import { MoneyBackGrtIcon } from "@/Icons/icon";
import { HessFreeIcon } from "@/Icons/icon";
import { MonSubIcon } from "@/Icons/icon";



interface FeaturProps extends StackProps{
    icon: ElementType;

}
 export function Features(props: FeaturProps){
    const {icon,children,...rest}= props;
    return(
        <HStack{...rest} spacing ='6'>
            <Icon as={icon} boxSize='12'/>
            <Text  textAlign='left' fontWeight='lg' fontSize='bold'>{children}</Text>
        </HStack>
    );

}

export  function Features1(){
    return(
        <Box maxW='1024px' m='auto' pt='60px' pb='8' >
        <HStack px='12' spacing='5' direction={['column','column','row']} textAlign={['left','left','center']}>
            <Features icon={MoneyBackGrtIcon}>
                30 day money back gurantee
            </Features>
            <Features icon={HessFreeIcon}>
                No setup, 100% hassle-free
            </Features>
            <Features icon={MonSubIcon}>
                No monthely subscription pay once and for all
            </Features>
        </HStack>
        </Box>
    )
}