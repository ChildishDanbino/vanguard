import React from 'react';
import { useQuery } from 'react-query';

import { Badge, Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { PRODUCTS, getProducts } from 'resources/products';

export const Home = () => {
  const { isLoading, data: products } = useQuery(PRODUCTS, getProducts);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <SimpleGrid columns={2} spacing={5}>
      {products.map((product: any) => (
        <Box key={product.id} padding={5} maxW="320px" borderWidth="1px">
          <Image borderRadius="md" src={product.logo} />
          <Flex align="baseline" marginTop={2}>
            <Badge colorScheme="pink">Plus</Badge>
            <Text marginLeft={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
              {product.name}
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {product.description}
          </Text>
          <Text marginTop={2}>{product.id}</Text>
          <Flex marginTop={2} align="flex-start">
            <Text marginTop={1} fontSize="sm">
              {product.cateogry}
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Home;
