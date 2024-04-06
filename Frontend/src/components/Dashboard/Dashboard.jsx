/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Heading,
    Button,
    Input,
    Text,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';
import {
    MdShowChart,
    MdRestaurant,
    MdDirectionsRun
} from 'react-icons/md';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend, 
    ResponsiveContainer
} from 'recharts';

const FitnessDashboard = () => {
    const [weightData, setWeightData] = useState([
        { day: 'Mon', weight: 150 },
        { day: 'Tue', weight: 151 },
        { day: 'Wed', weight: 149 },
        { day: 'Thu', weight: 148 },
        { day: 'Fri', weight: 147 },
        { day: 'Sat', weight: 146 },
        { day: 'Sun', weight: 145 }
    ]);
    const [editGraphOpen, setEditGraphOpen] = useState(false);
    const [editedWeightData, setEditedWeightData] = useState([...weightData]);
    const [foodEntries, setFoodEntries] = useState([]);
    const toast = useToast();

    const handleEditGraphOpen = () => {
        setEditGraphOpen(true);
    };

    const handleEditGraphClose = () => {
        setEditGraphOpen(false);
    };

    const handleEditSubmit = () => {
        setWeightData([...editedWeightData]);
        setEditGraphOpen(false);
        toast({
            title: "Graph Edited",
            description: "Weight data has been updated.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const calculateTotalCalories = () => {
        return foodEntries.reduce((total, entry) => total + parseInt(entry.calories), 0);
    };

    const handleAddFoodEntry = () => {
        setFoodEntries([...foodEntries, { food: '', calories: 0 }]);
    };

    const handleRemoveFoodEntry = (index) => {
        const newEntries = [...foodEntries];
        newEntries.splice(index, 1);
        setFoodEntries(newEntries);
    };

    return (
        <Box p={8} bgColor='gray.200' borderRadius="lg" boxShadow="lg" margin={10}>

            <Heading as="h2" size="md" mb={5} mt={10} textAlign="center" borderBottom="1px solid black">Fitness Tracking Dashboard</Heading>
                        {/* Weight Progress Graph */}
                        <Flex justifyContent="space-between">
                <Box width="100%">
                    <Heading as="h2" mb={10} fontSize="xl" color="black">
                        <MdShowChart /> Weight Progress
                    </Heading>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={weightData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                    <Flex justifyContent="flex-end">
                        <Button colorScheme="red" size='sm' onClick={handleEditGraphOpen} mb={10} mt={5}>Edit Graph</Button>
                    </Flex>
                </Box>
            </Flex>
            {/* Nutrition Tracking */}
            <Flex justifyContent="space-between" mb={10}>
                <Box flex={1}>
                
                    <Flex flexDirection="column">
                        
                        <Heading as="h2" mb={5} mt={30} fontSize="xl" color="black">
                        <MdRestaurant/> Food Entries 
                        </Heading>
                        {foodEntries.map((entry, index) => (
                            <Flex key={index} mb={2}>
                                <Input placeholder="Food" value={entry.food} onChange={(e) => {
                                    const newEntries = [...foodEntries];
                                    newEntries[index].food = e.target.value;
                                    setFoodEntries(newEntries);
                                }} />
                                <Input placeholder="Calories" type="number" value={entry.calories} onChange={(e) => {
                                    const newEntries = [...foodEntries];
                                    newEntries[index].calories = e.target.value;
                                    setFoodEntries(newEntries);
                                }} />
                                <Button size="sm" colorScheme="red" fontSize="sm" onClick={() => handleRemoveFoodEntry(index)} ml={3}> Remove </Button>
                            </Flex>
                        ))}
                    </Flex>
                    <Box mt={4}>
                        <Button  colorScheme="red" size='sm' onClick={handleAddFoodEntry}>Add Food Entry</Button>
                    </Box>
                </Box>
            </Flex>
            {/* Display Total Calories */}
            <Box mb={8}>
                <Flex justifyContent="center">
                    <Text fontWeight="bold" fontSize="lg" color="black">Total Calories Consumed: {calculateTotalCalories()}</Text>
                </Flex>
            </Box>
            

            {/* Edit Graph Modal */}
            <Modal isOpen={editGraphOpen} onClose={handleEditGraphClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Weight Progress</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {editedWeightData.map((entry, index) => (
                            <Flex key={index} mb={4}>
                                <Input placeholder={`Weight (${entry.day})`} type="number" value={entry.weight} onChange={(e) => {
                                    const newEntries = [...editedWeightData];
                                    newEntries[index].weight = e.target.value;
                                    setEditedWeightData(newEntries);
                                }} />
                            </Flex>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="black" mr={3} onClick={handleEditSubmit}>Save</Button>
                        <Button onClick={handleEditGraphClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default FitnessDashboard;
