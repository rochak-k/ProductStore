import React, { useState } from "react";
import { Box, Heading, Image, Text, HStack, VStack, Button } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useProductStore } from "src/store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  // Product update state
  // const [updatedProduct, setUpdatedProduct] = useState(product);
  // Delete handler
  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log("Success:", success);
    console.log("Message:", message);
  };
  // Update handler
  // const handleUpdateProduct = async (pid, updatedProduct) => {
  //   const handleUpdateProduct = async (pid, updatedProduct) => {
  //     const { success, message } = await updateProduct(pid, updatedProduct);
  //     console.log("Success:", success);
  //     console.log("Message:", message);
  //     onClose(); // close modal after update
  //   };
  // };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      mx="8px"
      my="4px"
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
            <Button bg="blue.500" _hover={{ bg: "blue.400" }}>
            <FaRegEdit />
          </Button>
          <Button
            bg="red.500"
            _hover={{ bg: "red.400" }}
            onClick={() => handleDelete(product._id)}
          >
            <MdDelete />
          </Button>
        
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
