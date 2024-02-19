import { Flex, Box, Heading, Spacer, Link } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box fontSize={20}>
            <nav className="navbar">
                <Link mr="2rem" color="blue.500" _hover={{ textDecoration: 'underline' }}>My Workout Plan</Link>
                <Link mr="2rem" color="blue.500" _hover={{ textDecoration: 'underline' }}>Home</Link>
                <Link mr="2rem" color="blue.500" _hover={{ textDecoration: 'underline' }}>Create New Post</Link>
                <Link color="blue.500" _hover={{ textDecoration: 'underline' }}>Search</Link>
            </nav>   
        </Box>
    )
}
