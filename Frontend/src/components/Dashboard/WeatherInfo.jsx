/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Box, Heading, Text, Input, Button, Flex, HStack } from '@chakra-ui/react';


const WeatherInfo = ({ weather }) => {
    const [city, setCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState(weather);

    useEffect(() => {
        setCurrentWeather(weather);
    }, [weather]);


    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleSearch = async () => {
        try {
            const response = await axios.get(`api/weather/weather_info?city=${city}`);
            const newWeatherData = response.data;
            setCurrentWeather(newWeatherData);
        } catch(error) {
            console.error('Error fetching weather data for new city:', error);
            setCity("");

            alert("Error fetching weather data. Please enter a valid city.");
        }
    }

    if (!currentWeather) {
        return null;
    }
    
    const temperatureFahrenheit = Math.floor(currentWeather.temperature * 9 / 5 + 32);

    let suggestion = '';
    if (temperatureFahrenheit >= 86) {
        suggestion = 'It\'s hot outside! Consider going for a swim or staying indoors with air conditioning.';
    } else if (temperatureFahrenheit >= 68) {
        suggestion = 'It\'s warm outside! Go for a walk or enjoy outdoor activities.';
    } else if (temperatureFahrenheit >= 50) {
        suggestion = 'It\'s cool outside! Take a hike or enjoy some outdoor exercise.';
    } else {
        suggestion = 'It\'s cold outside! Stay warm and try to workout indoors.';
    }
    
    return (
        <Box>
            <Heading as="h2" textAlign='center' size="md" mb={5} mt={5} borderBottom="1px solid black">Current Weather</Heading>
            {weather && (
                <>  
                    <Box><Text fontSize="3xl" mb={6}>{suggestion}</Text></Box>
                    <Text fontSize="3xl" mb={0}>{temperatureFahrenheit} °F</Text>
                    <Text fontSize="2xl" mb={1}>{currentWeather.city}</Text>
                    <Text fontSize="1xl" mb={2}>{currentWeather.condition}</Text>
                    
                </>
            )}
            <Flex mt={10}>
                <Input
                    placeholder="Enter city"
                    value={city}
                    onChange={handleCityChange}
                    mr={2}
                />
                <Button colorScheme='red' onClick={handleSearch}>Search</Button>
            </Flex>
        </Box>
    );
};

WeatherInfo.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        condition: PropTypes.string.isRequired,
    })
};

export default WeatherInfo;
