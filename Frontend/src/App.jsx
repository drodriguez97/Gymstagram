import { ChakraProvider, VStack} from '@chakra-ui/react';
import { Header, Footer } from './components/HeaderFooter';
import Login from './components/Login';
import Profile from './components/Profile';
import WorkoutSchedule from './components/WorkoutSchedule';

export default function App() {
    return (
        <ChakraProvider>
            <VStack minH="100vh" w="100vw" bg="gray.100">
                <Header />
                <VStack spacing={8} mt={3}>
                    <Login />
                    <Profile />
                </VStack>
                <WorkoutSchedule />
                <Footer /> 
            </VStack>
        </ChakraProvider>
    );
}



