// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import WorkoutList from "./WorkoutList";
import DayOfWeekPicker from "./DayOfWeekPicker"; 
import WeekCalendar from "./WeekCalendar"; 
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormHelperText, FormLabel, Input, Select, useToast} from '@chakra-ui/react';

export default function WorkoutScheduleButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([]);

    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
    const [selectedWorkoutName, setSelectedWorkoutName] = useState('');
    const [workoutSets, setWorkoutSets] = useState('');
    const [workoutReps, setWorkoutReps] = useState('');
    const [workoutWeight, setWorkoutWeight] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [error, setError] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    const toast = useToast();

    const handleMuscleGroupChange = (e) => {
        setSelectedMuscleGroup(e.target.value);
        setSelectedWorkoutName('');
    };

    const handleWorkoutNameChange = (e) => {
        setSelectedWorkoutName(e.target.value);
    };

    const handleWorkoutSets = (e) => {
        setWorkoutSets(e.target.value);
    };

    const handleWorkoutReps = (e) => {
        setWorkoutReps(e.target.value);
    };

    const handleDaySelect = (selectedDay) => {
        setSelectedDay(selectedDay);
    };

    const handleWorkoutWeight = (e) => {

        setWorkoutWeight(e.target.value);

    };

    const handleSubmit = () => {
        if (!selectedMuscleGroup || !selectedWorkoutName || !workoutSets || !workoutReps) {
            setError("Please fill in all the fields.");
        } else {
            setError("");
            const newEvent = {
                title: selectedWorkoutName,
                muscleGroup: selectedMuscleGroup,
                start: selectedDay,
                sets: workoutSets,
                reps: workoutReps,
                weight: workoutWeight,      
            };
            setEvents([...events, newEvent]);
            closeModal();
            setSelectedMuscleGroup('');
            setSelectedWorkoutName('');
            setWorkoutSets('');
            setWorkoutReps('');
            setWorkoutWeight('');
            setSelectedDay('');

            toast({
                title: "Workout Added",
                description: "Your workout has been successfully added",
                status: "success",
                duration: 1000,
                isClosable: true,
            })
        }    
    };

    return (
        <Box>
            <Button colorScheme="blue" onClick={openModal}>Add Workout</Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent borderRadius="xl">
                    <ModalHeader borderBottomWidth="1px">Enter A Workout</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl marginBottom="4">
                            <FormLabel color={"blue.500"}>Muscle Group</FormLabel>
                            <Select placeholder="Select Muscle Group" value={selectedMuscleGroup} onChange={handleMuscleGroupChange} marginBottom="4">
                                {Object.keys(WorkoutList).map((muscleGroup) => (
                                    <option key={muscleGroup} value={muscleGroup}>{muscleGroup}</option>
                                ))}
                            </Select>
                        </FormControl>
                        {selectedMuscleGroup && (
                            <FormControl marginBottom="4">
                                <FormLabel>Workout Name</FormLabel>
                                <Select placeholder="Select Workout Name" value={selectedWorkoutName} onChange={handleWorkoutNameChange} marginBottom="4">
                                    {WorkoutList[selectedMuscleGroup].map((workoutName) => (
                                        <option key={workoutName} value={workoutName}>{workoutName}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                        <FormControl marginBottom="4">
                            <FormLabel color={"blue.500"}>Workout Sets</FormLabel>
                            <Input type="number" value={workoutSets} onChange={handleWorkoutSets} placeholder="Enter Workout Sets" />
                        </FormControl>
                        <FormControl   marginBottom="4">
                            <FormLabel color={"blue.500"}>Workout Reps</FormLabel>
                            <Input type="number" value={workoutReps} onChange={handleWorkoutReps} placeholder="Enter Workout Reps" />
                        </FormControl>
                        <FormControl  marginBottom="4">
                        <FormLabel color={"blue.500"}>Workout Weight</FormLabel>
                            <Input type="number" value={workoutWeight} onChange={handleWorkoutWeight} placeholder="Enter Workout Weight" />
                        </FormControl>
                        <FormControl marginBottom="4">
                            <FormLabel color={"blue.500"} textAlign="center" >Select a Day of the Week</FormLabel>
                            <DayOfWeekPicker onSelect={handleDaySelect} />
                        </FormControl>
                        <FormControl marginBottom="4">
                            {error && <FormHelperText color="red">{error}</FormHelperText>}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter borderTopWidth="1px">
                        <Button colorScheme="blue" mr={3} onClick={closeModal}>Close</Button>
                        <Button variant="outline" colorScheme="blue" onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <WeekCalendar events={events}/>
        </Box>
    );
}