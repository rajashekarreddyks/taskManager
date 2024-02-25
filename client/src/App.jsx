import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Task} from '../src/Task';
import CreateTask from './CreateTask';
import UpdateTask from './UpdateTask';

function App() {
  const [count, setCount] = useState(0)
``
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Task/>}></Route>
      <Route path="/create" element={<CreateTask/>}></Route>
      <Route path="/update" element={<UpdateTask/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
