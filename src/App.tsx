import { Badge, Divider, Flex } from '@chakra-ui/react';
import './styles/App.css';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ObjectiveSection from './sections/objective';
import AboutSection from './sections/about/index';
import ProjectsSection from './sections/projects';

function App() {
  const [search] = useSearchParams();

  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="between"
      padding={12}
      gap={30}
      maxW="full"
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

export default App;
