'use client'
import { ChakraProvider,Box,Text, Heading} from "@chakra-ui/react";

export default function Myapp(){
    return(
    <ChakraProvider>
        <Box pb='28' as='section'>
        <Box  color='gray.50' bg='#4d0885'pt='90px' pb='198px' px='8' textAlign={['left','left','center']}>
            <Heading fontWeight='extrabold' fontSize ={['3xl','3xl','5xl']} color='#f5f5fa'>Simple Pricing for Your Business</Heading>
            <Text fontWeight='medium' fontSize ={['lg','lg','2xl']}color='#f5f5fa' pt='4'>Plain that are carefully crafted to suits your busniess</Text>
        </Box>
        </Box>
    </ChakraProvider>
    )
}
