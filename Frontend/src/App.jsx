import { ChakraProvider, VStack, Center, Heading, Container } from '@chakra-ui/react';
import { Nav, Footer } from './components/NavFooter';
import WorkoutScheduleButton from './components/WorkoutScheduleButton';
import Dashboard from './components/Dashboard/Dashboard';
import WeatherDashboard from './components/Dashboard/WeatherDashboard';

export default function App() {
    return (
        <ChakraProvider>
            <header>
                <Center bg='black' color='white' width='100%' padding={10}>
                    <VStack>
                        <Heading padding={4}>Gymstagram</Heading>
                        <Nav />
                    </VStack> 
                </Center>
            </header>
            <main>
                    <VStack bg='white' spacing={100} paddingY={10}>
                        <Container maxW="80%" p={0}>
                        <WeatherDashboard />
                            <Dashboard />
                            <WorkoutScheduleButton />
                        </Container>
                    </VStack> 
            </main>

            <footer>
                <VStack spacing={30} width='100%'>        
                    <Footer />    
                </VStack>   
            </footer>       
        </ChakraProvider>
    );
}
