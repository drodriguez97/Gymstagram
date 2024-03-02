import { Box, Link, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

export function Nav() {
    return (
        <Box>
            <Flex justifyContent="center">
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
        <Box color="black" mt="auto">
        <Flex justifyContent="center">
            <Text fontSize="sm" color="gray.500">© 2024 Gymstagram. All rights reserved.</Text>
        </Flex>
        </Box>
    );
}
