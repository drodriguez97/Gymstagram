/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Heading} from '@chakra-ui/react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('User authenticated successfully');
        } catch (error) {
            setError('Authentication failed. Please check your email and password.');
            console.error('Error occurred during authentication:', error);
        }
    };
    return (
        <Box border="3px solid" borderRadius="md" borderColor={'black'} p={50} maxW="md" mx="auto">
          <Heading as="h1" mb={50}>Login</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Email:</FormLabel>
              <Input type="email" value={email} onChange={handleEmail} required border="1px solid" borderRadius="md"/>
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Password:</FormLabel>
              <Input type="password" value={password} onChange={handlePassword} required border="1px solid" borderRadius="md" />
            </FormControl>
            <Button type="submit" colorScheme="blue">Login</Button>
          </form>
        </Box>
      );
}
