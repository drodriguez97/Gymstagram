/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button } from "@chakra-ui/react";

const DayOfWeekPicker = ({ onSelect }) => {
  const [selectedDay, setSelectedDay] = useState("");

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleDayClick = (day) => {
    setSelectedDay(day);
    onSelect(day);
    console.log(day)
  };

  return (
    <div>
      <div style={{ display: 'grid' }}>
        {daysOfWeek.map(day => (
          <Button
            key={day}
            onClick={() => handleDayClick(day)}
            colorScheme={selectedDay === day ? 'blue' : 'gray'}
            variant="outline"
            mr="2"
            mb="2"
            _hover={{ bg: selectedDay === day ? 'blue.400' : 'gray.300', color: selectedDay === day ? 'white' : 'black' }}
          >
            {day}
          </Button>
        ))}
      </div>
    </div>
  );
};

DayOfWeekPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default DayOfWeekPicker;

