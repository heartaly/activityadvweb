import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="title">React Activity Portal</h1>
      <p> Compiled Activities created by Fernandez, Lobaton, Portillo, and Paje under INF237</p>
      
      <div className="card-grid">
        <div className="card">
            <Link to="/attendancechecker" className="card-name">Attendance Checker</Link></div>

        <div className="card">
            <Link to="/electricitybill" className="card-name">Electricity Bill</Link></div>
        <div className="card">
            <Link to="/passwordchecker" className="card-name">Password Checker</Link></div>
        <div className="card">
            <Link to="/gradeevaluation" className="card-name">Grade Evaluation</Link></div>
      </div>
    </div>
  )
}

export default Dashboard
