import { Box, Link, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <Box bg="blue.500" color="white">
            <Flex justifyContent="center">
                <Link px={4} py={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>Gymstagram</Link>
                <Link px={4} py={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>
                    <FontAwesomeIcon icon={faHome} style={{ marginRight: '0.5rem' }} /> Home
                </Link>
                <Link px={4} py={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: '0.5rem' }} /> Create New Post
                </Link>
                <Link px={4} py={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>
                    <FontAwesomeIcon icon={faSearch} style={{ marginRight: '0.5rem' }} /> Search
                </Link>
            </Flex>
        </Box>
    );
}

export function Footer() {
    return (
        <Box bg="blue.500" color="white" mt="auto">
            <Flex justifyContent="center">
                <Box py={2}>© 2024 Gymstagram. All rights reserved.</Box>
            </Flex>
        </Box>
    );
}
