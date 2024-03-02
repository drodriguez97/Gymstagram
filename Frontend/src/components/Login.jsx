/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Heading, useToast} from '@chakra-ui/react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const toast = useToast();

    const handleEmail = (events) => {
        setEmail(events.target.value);
    };

    const handlePassword = (events) => {
        setPassword(events.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        console.log(email);
        const response = await axios.post('api/user/login', { email, password });
        console.log('Login successful!');
      } catch (error) {
        if (error.response) {
          setError(error.response.data); 
        } else {
          setError('An unexpected error occurred'); 
        }
        console.error('Error occurred during login:', error);
      }
      toast({
        title: "Login Success!",
        description: "You have logged into your account",
        status: 'success',
        duration: 1000,
      })
    }

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
