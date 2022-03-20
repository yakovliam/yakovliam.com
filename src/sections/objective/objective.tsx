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
        I am a results <Text as="i">and</Text> process-oriented engineer with
        years of knowledge in product development cycles, application
        development, and network administration. I aim to leverage my abilities
        to successfully fill an engineering position at your company. I am
        frequently praised as diligent by my peers, and I can be relied upon to
        help your company achieve its goals.
      </Text>
    </Flex>
  );
}

export default ObjectiveSection;
