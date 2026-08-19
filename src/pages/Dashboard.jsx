import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const AttendanceIcon = () => (
  <svg {...iconProps}>
    <path d="M9 11l3 3 8-8" />
    <path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
  </svg>
)

const ElectricityIcon = () => (
  <svg {...iconProps}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
)

const PasswordIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>
)

const GradeIcon = () => (
  <svg {...iconProps}>
    <path d="M6 20V12" />
    <path d="M12 20V6" />
    <path d="M18 20v-8" />
  </svg>
)

const activities = [
  { to: '/attendancechecker', icon: AttendanceIcon, name: 'Attendance Checker' },
  { to: '/electricitybill', icon: ElectricityIcon, name: 'Electricity Bill' },
  { to: '/passwordchecker', icon: PasswordIcon, name: 'Password Checker' },
  { to: '/gradeevaluation', icon: GradeIcon, name: 'Grade Evaluation' },
]

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="title">React Activity Portal</h1>
      <p>Compiled Activities created by Fernandez, Lobaton, Portillo, and Paje under INF237</p>

      <div className="card-grid">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <Link to={activity.to} className="card" key={activity.to}>
              <span className="card-icon">
                <Icon />
              </span>
              <span className="card-name">{activity.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
