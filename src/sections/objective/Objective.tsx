import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ObjectiveSection() {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      gap={5}
      marginBottom={5}
    >
      <Heading>Objective</Heading>
      <Text align="center" maxW="md">
        A results and process-oriented engineer with years of knowledge in
        product development cycles, application development, and network
        administration, leveraging a strong background in computer science to
        deliver high-quality software and hardware to a diverse set of clients.
      </Text>
    </Flex>
  );
}

export default ObjectiveSection;
