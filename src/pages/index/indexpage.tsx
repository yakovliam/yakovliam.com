import { Badge, Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ObjectiveSection from '../../sections/objective/Objective';
import AboutSection from '../../sections/about/About';
import ProjectsSection from '../../sections/projects/Projects';

function IndexPage() {
  const [search] = useSearchParams();

  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="between"
      padding={12}
      gap={30}
    >
      {search.get('t') && (
        <Flex justify="center" marginBottom={5}>
          <Badge
            fontSize={{
              base: '2xl',
              md: '3xl',
              lg: '4xl',
              xl: '5xl',
            }}
            colorScheme="green"
          >
            Hello, {search.get('t')}
          </Badge>
        </Flex>
      )}
      <AboutSection />
      <Divider />
      <ObjectiveSection />
      <Divider />
      <ProjectsSection />
    </Flex>
  );
}

export default IndexPage;
