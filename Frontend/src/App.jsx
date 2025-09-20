import React from 'react'
import { Box} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './component/navbar'
const App = () => {
  return (
    <Box bg="gray.900" color="white" minH="100vh">
    <div>
      <Box minH={"100vh"}>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<HomePage/>} />
          <Route path = "/create" element = {<CreatePage/>}/>
        </Routes>
      </Box>
    </div>
    </Box>
  )
}

export default App
