import { useState } from 'react'
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='nav'><Navbar></Navbar>
    </div>
  )
}

export default App
