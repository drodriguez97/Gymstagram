import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import WorkoutList from "./WorkoutList";
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormHelperText, FormLabel, Input, Select} from '@chakra-ui/react';

export default function WorkoutScheduleButton() {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
    const [selectedWorkoutName, setSelectedWorkoutName] = useState('');
    const [workoutSets, setWorkoutSets] = useState('');
    const [workoutReps, setWorkoutReps] = useState('');
    const [workoutDuration, setWorkoutDuration] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [error, setError] = useState("");

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
    
    const handleWorkoutDuration = (e) => {
        setWorkoutDuration(e.target.value);
    };

    const handleStartDate = (date) => {
        setStartDate(date);
        if(date > endDate) {
            setError("Choose a start date that is before your end date");
        } else {
            setError("");
        }
    };

    const handleEndDate = (date) => {
        setEndDate(date);
        if(date < startDate) {
            setError("Choose an end date that is after your start date");
        } else {
            setError("");
        }
    };

    const handleSubmit = () => {
        if (!selectedMuscleGroup || !selectedWorkoutName || !workoutSets || !workoutReps || !workoutDuration || !startDate || !endDate) {
            setError("Please fill in all the fields.");
        } else {
            setError(""); // Clear error message if all fields are filled
            // Here you can proceed with submitting the form data
            console.log("Form submitted successfully!");
            closeModal(); // Close modal after successful submission
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
                            <FormLabel>Muscle Group</FormLabel>
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
                            <FormLabel>Workout Sets</FormLabel>
                            <Input type="text" value={workoutSets} onChange={handleWorkoutSets} placeholder="Enter Workout Sets" />
                        </FormControl>
                        <FormControl marginBottom="4">
                            <FormLabel>Workout Reps</FormLabel>
                            <Input type="text" value={workoutReps} onChange={handleWorkoutReps} placeholder="Enter Workout Reps" />
                        </FormControl>
                        <FormControl marginBottom="4">
                            <FormLabel>Workout Duration</FormLabel>
                            <Input type="text" value={workoutDuration} onChange={handleWorkoutDuration} placeholder="Enter Workout Duration" />
                        </FormControl>
                        <FormControl marginBottom="4">
                            <FormLabel color="blue">Enter a Start Date</FormLabel>
                            <DatePicker selected={startDate} onChange={handleStartDate} />
                        </FormControl>
                        <FormControl marginBottom="4">
                            <FormLabel color="blue">Enter an End Date</FormLabel>
                            <DatePicker selected={endDate} onChange={handleEndDate} />
                            {error && <FormHelperText color="red">{error}</FormHelperText>}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter borderTopWidth="1px">
                        <Button colorScheme="blue" mr={3} onClick={closeModal}>Close</Button>
                        <Button variant="outline" colorScheme="blue" onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
