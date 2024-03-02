import { ChakraProvider, VStack, Center, Heading } from '@chakra-ui/react';
import { Nav, Footer } from './components/NavFooter';
import Login from './components/Login';
import Profile from './components/Profile';
import WorkoutScheduleButton from './components/WorkoutScheduler';

export default function App() {
    return (
        <ChakraProvider>
            <header>
                <Center bg='blue.500' color='white' width='100%' padding={10}>
                    <VStack>
                        <Heading padding={4}>Gymstagram</Heading>
                        <Nav />
                    </VStack> 
                </Center>
            </header>

            <main>
                <Center bg='white.500' color='black' width='100%' padding={5}>
                    <VStack spacing={50} paddingY={10}>
                        <Profile />
                        <Login />
                        <WorkoutScheduleButton />
                    </VStack> 
                </Center>
            </main>

            <footer>
                <VStack spacing={30} width='100%'>        
                    <Footer />    
                </VStack>   
            </footer>       
        </ChakraProvider>
    );
}
