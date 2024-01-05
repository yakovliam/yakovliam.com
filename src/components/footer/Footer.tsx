import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex
      backgroundColor={background}
      w="full"
      padding={5}
      align="center"
      justify="center"
      textAlign="center"
      gap={5}
    >
      <Text>Copyright © {new Date().getFullYear()} Jacob Cohen</Text>
      <IconButton
        onClick={toggleColorMode}
        aria-label="toggle color-mode"
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      />
    </Flex>
  );
}

export default Footer;
