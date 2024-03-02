/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types';
import { Box, Grid, Heading, Divider, UnorderedList, ListItem, Text, Badge, VStack } from "@chakra-ui/react";

const WeekCalendar = ({ events }) => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const eventsByDay = {};
    
    events.forEach(event => {
        const eventDay = event.start;

        if (!eventsByDay[eventDay]) {
            eventsByDay[eventDay] = [];
        }

        // Check if the event already exists for that day if so don't add it.
        const isDuplicate = eventsByDay[eventDay].some(existingEvent => existingEvent.title === event.title && existingEvent.start === event.start);

        if (!isDuplicate) {
            eventsByDay[eventDay].push(event);
        }
    });

    const generateKey = (title, start) => `${title}${start}`;

    return (
        <Grid templateColumns="repeat(7, 1fr)" gap="3px" marginTop="20px">
            {daysOfWeek.map(day => (
                <Box key={day} borderWidth="3px" borderColor="gray.200" borderRadius="md" p="4">
                    <Heading as="h2" size="md">{day}</Heading>
                    <Divider my="2" />
                    {eventsByDay[day] && eventsByDay[day].length > 0 ? (
                        <UnorderedList>
                            {eventsByDay[day].map(events => (
                                <Badge mr="2" mb="2" fontSize={13} color="blue.500" key={generateKey(events.title, events.start)} minW="100px" minH="50px" borderRadius="5px">
                                    <VStack spacing="2" align="center">
                                        <Text color="black">{events.title}</Text>
                                        <Text>Reps: {events.reps}</Text>
                                        <Text>Sets: {events.sets}</Text>
                                        <Text>Weight: {events.weight}</Text>
                                    </VStack>
                                </Badge>

                            ))}
                        </UnorderedList>
                    ) : (
                        <Text fontSize="sm" color="gray.500">No events for {day}</Text>
                    )}
                </Box>
            ))}
        </Grid>
    );
};

WeekCalendar.propTypes = {
    events: PropTypes.array.isRequired,
};

export default WeekCalendar;





