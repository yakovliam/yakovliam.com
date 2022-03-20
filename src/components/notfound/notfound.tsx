import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import React from 'react';

function NotFound() {
  return (
    <Flex
      align="center"
      justify="center"
      alignItems="center"
      flexDirection="column"
      w="full"
      padding={20}
      gap={5}
    >
      <Flex
        flexDirection="row"
        align="center"
        justify="center"
        alignItems="center"
        gap={5}
      >
        <Heading>404</Heading>
        <Text size="3xl">Not Found</Text>
      </Flex>
      <Box>
        <Link href="/">Home</Link>
      </Box>
    </Flex>
  );
}
export default NotFound;
