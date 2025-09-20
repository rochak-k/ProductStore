import React from 'react'
import { Container , Flex , Text , HStack, Button, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FiPlusSquare } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <div>
      <Container maxW={"1140px"} px = {4} bgColor={'grey.800'}>
     <Flex h = {16} 
     justifyContent={"space-between"} 
     alignItems = {"center"}
     flexDir={{base : "column" , sm: "row"}}
     >
     <Text
					fontSize={{ base: "22px", sm: "28px" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					// bgGradient={"linear(to-r, cyan.400, blue.500)"}
					// bgClip={"text"}
                    color={'blue.500'}
                >
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>
     <HStack spacing = {2} alignItems={"center"}   bg={"gray.600"}  borderRadius="md"  >
    <Link to = {"/create"}> 
    <Button bg="gray.700" _hover={{ bg: "gray.500" } }>
  <Icon as={FiPlusSquare} boxSize={8} color={'white'}/> {/* 8 = 2rem = 32px */}
    </Button>
    </Link>
     </HStack>
     </Flex>
      </Container>
    </div>
  )
}
export default Navbar
