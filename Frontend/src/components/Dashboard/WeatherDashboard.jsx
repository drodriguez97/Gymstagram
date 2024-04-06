/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


// Dashboard component
const UserDashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("api/weather/weather_info");
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);



  return (
    <Box p={6} bgColor='gray.200' boxShadow='lg' borderRadius="lg">
      <Flex  direction="column" justify="left " >
          <WeatherInfo weather={weather} />
      </Flex>
    </Box>
  );
};

export default UserDashboard;
