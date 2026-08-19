import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import AttendanceChecker from "./pages/AttendanceChecker";
import ElectricityBill from "./pages/ElectricityBill";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 

      <Navbar />
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/attendancechecker"
            element={<AttendanceChecker />}
          />

          <Route
            path="/electricitybill"
            element={<ElectricityBill />}
          />

          <Route
            path="/gradeevaluation"
            element={<GradeEvaluation />}
          />

          <Route
            path="/passwordchecker"
            element={<PasswordChecker />}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
