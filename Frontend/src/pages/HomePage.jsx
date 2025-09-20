import React from 'react'
import {Container , VStack , Text, SimpleGrid } from '@chakra-ui/react'
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from 'src/store/product';
import ProductCard from 'src/component/ProductCard';
const HomePage = () => {
  const {fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

  
  return (
    <div>
     <Container maxW='container.xl' py={12}>
     <VStack spacing = {8}>
    <Text
          fontSize={"30px"}
					fontWeight={"bold"}
					color={'blue.500'}
					textAlign={"center"}
    >
	      Current Products 🚀
    </Text>
    <SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
         {products.map((product) => (
  <ProductCard key={product._id} product={product} />
))}

        </SimpleGrid>
       {products.length === 0 && (
        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
       )}
     </VStack>
     </Container>
    </div>
  )
}
export default HomePage
