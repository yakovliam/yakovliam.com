import { Box, ColorModeScript, Flex } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NotFound from './components/notfound/NotFound';
import ClientsPage from './pages/clients/ClientsPage';
import IndexPage from './pages/index/IndexPage';
import theme from './theme';

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex h="100vh" direction="column">
        <Box
          h="full"
          overflowY="auto"
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Box>
        <Footer />
      </Flex>
    </>
  );
}

export default App;
