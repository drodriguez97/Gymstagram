import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
Center,
Button,
Heading,
VStack,
HStack,
Text,
Image,
Link
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';

export default function App() {
  return (
    <ChakraProvider>
      <Heading className="App-header" padding={4} fontSize={50}>Gymstagram</Heading>
      <VStack spacing={8} mt={3}>
          <Navbar />
          <Login />
          <Profile />
        </VStack>
  </ChakraProvider>
  );
}



