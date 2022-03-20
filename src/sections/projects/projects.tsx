import { ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectsSection() {
  const navigate = useNavigate();

  type ProjectElement = {
    title: string;
    description: string;
    url: string;
  };

  const data: ProjectElement[] = [
    {
      title: 'Licent',
      description:
        'A robust digital product licensing system. demo@yakovliam.com/demo1234',
      url: 'https://github.com/yakovliam/licent.yakovliam.com',
    },
    {
      title: 'KnowBeforeYouGo',
      description:
        'A system of IoTs and apps that let you know how busy a destination is',
      url: 'https://github.com/yakovliam/knowbeforeyougo',
    },
    {
      title: 'RTool',
      description:
        'A cross-platform remote administration tool controlled by web panel',
      url: 'https://github.com/yakovliam/RTool',
    },
  ];

  return (
    <Flex flexDirection="column" align="center" justify="center" gap={5}>
      <Flex flexDirection="column" align="center" gap={5}>
        <Heading>Projects</Heading>
        <Button
          rightIcon={<ArrowRightIcon />}
          onClick={() => navigate('/clients')}
        >
          Explore Clients
        </Button>
      </Flex>
      <Flex gap={5} wrap="wrap" flexDirection="row" justifyContent="center">
        {data.map((ele: ProjectElement) => (
          <LinkBox key={ele.url}>
            <LinkOverlay href={ele.url}>
              <Box
                boxShadow="md"
                maxW="xs"
                textAlign="center"
                dropShadow="lg"
                borderWidth="1px"
                borderRadius="lg"
                padding={5}
                overflow="hidden"
              >
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {ele.title}
                </Box>
                <Box mt="1" as="h5" lineHeight="tight">
                  {ele.description}
                </Box>
              </Box>
            </LinkOverlay>
          </LinkBox>
        ))}
      </Flex>
    </Flex>
  );
}
export default ProjectsSection;
