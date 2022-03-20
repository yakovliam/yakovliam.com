import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const background = useColorModeValue('gray.100', 'gray.700');
  const navigate = useNavigate();

  return (
    <Flex
      backgroundColor={background}
      w="full"
      padding={3}
      align="center"
      justify="start"
      textAlign="center"
      gap={5}
    >
      <Button leftIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
        Home
      </Button>
    </Flex>
  );
}

export default Header;
