import { Avatar, Flex, Tooltip, Link, Icon, Heading } from '@chakra-ui/react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiAdobeacrobatreader, SiGmail, SiLinkedin } from 'react-icons/si';
import Jacob from '../../jacob.png';

function AboutSection() {
  return (
    <Flex flexDirection="column" align="center" justify="center" gap={10}>
      <Avatar boxShadow="dark-lg" size="xl" name="Jacob Cohen" src={Jacob} />
      <Heading>Jacob Cohen</Heading>
      <Flex flexDirection="row" gap={5}>
        <Tooltip label="GitHub" aria-label="github">
          <Link href="https://github.com/yakovliam" isExternal>
            <Icon as={BsGithub} w={12} h={12} />
          </Link>
        </Tooltip>
        <Tooltip label="Email" aria-label="email">
          <Link
            href="mailto:jacob@yakovliam.com,jacobcohen323@gmail.com"
            isExternal
          >
            <Icon as={SiGmail} w={12} h={12} />
          </Link>
        </Tooltip>
        <Tooltip label="LinkedIn" aria-label="linkedin">
          <Link
            href="https://www.linkedin.com/in/jacob-cohen-a82162208/"
            isExternal
          >
            <Icon as={SiLinkedin} w={12} h={12} />
          </Link>
        </Tooltip>
        <Tooltip label="Resume" aria-label="resume">
          <Link href="/resume.pdf" isExternal>
            <Icon as={SiAdobeacrobatreader} w={12} h={12} />
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
export default AboutSection;
