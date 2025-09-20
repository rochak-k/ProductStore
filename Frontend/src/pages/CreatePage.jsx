import React, { useState } from "react";
import {useProductStore } from "../store/product.js";
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Input,
} from "@chakra-ui/react";
const CreatePage = () => {
  const [NewProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });
   const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
   const {success , message } = await createProduct (NewProduct);
   console.log ("Success :" , success)
   console.log ("Message :" , message)

   setNewProduct ({name : ""  , price : "" , image : ""})
  }
  return (
    <Container maxW={"640px"}>
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"3xl"}
          mb={"18px"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Create New Product
        </Heading>
        <Box w={"full"} bg={"gray.700"} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={NewProduct.name}
              onChange={(e) =>
                setNewProduct({ ...NewProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={NewProduct.price}
              onChange={(e) =>
                setNewProduct({ ...NewProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={NewProduct.image}
              onChange={(e) =>
                setNewProduct({ ...NewProduct, image: e.target.value })
              }
            />
            	<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreatePage;