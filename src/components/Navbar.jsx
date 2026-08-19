import React from 'react'
import { NavLink } from 'react-router-dom'
import "../pages/Dashboard.css"

function Navbar() {
return (
<>
    <nav className="navbar"> 
        <ul>
            <li> <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}> Home </NavLink></li>
            <li> <NavLink to="/attendancechecker" className={({isActive})=> isActive ? 'active' : ''}> Attendance Checker </NavLink></li>
            <li> <NavLink to="/electricitybill" className={({isActive})=> isActive ? 'active' : ''}>  Electricity Bill </NavLink></li>
            <li> <NavLink to="/passwordchecker" className={({isActive})=> isActive ? 'active' : ''}> Password Checker </NavLink></li>
            <li> <NavLink to="/gradeevaluation" className={({isActive})=> isActive ? 'active' : ''}> Grade Evaluation </NavLink></li>  
        </ul>
    </nav>
    </>
    )
}

export default Navbar;
