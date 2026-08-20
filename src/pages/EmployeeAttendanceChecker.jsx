import { useState } from "react";
import defaultProfile from "../assets/defaultprofile.jpg";
import "./EmployeeAttendanceChecker.css";

const TIME_PATTERN = /^\d{1,2}(\.\d{1,2})?$/;

function decimalToReadableTime(decimalHours) {
    const totalMinutes = Math.round(decimalHours * 60);
    const hours24 = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const period = hours24 >= 12 ? "PM" : "AM";
    let hours12 = hours24 % 12;
    if (hours12 === 0) hours12 = 12;
    return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
}

function AttendanceChecker() {
    const [name, setName] = useState("");
    const [timeIn, setTimeIn] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);
    const [checkCount, setCheckCount] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTimeIn(event.target.value);
    };

    const handleCheck = () => {
        const trimmedName = name.trim();

        if (!trimmedName) {
            setError("Please enter the employee's name.");
            setResult(null);
            return;
        }

        if (!TIME_PATTERN.test(timeIn.trim())) {
            setError("Please enter a valid time as decimal hours (e.g. 8.5).");
            setResult(null);
            return;
        }

        const decimalHours = parseFloat(timeIn);

        if (decimalHours < 0 || decimalHours > 23.99) {
            setError("Time must be between 0 and 23.99.");
            setResult(null);
            return;
        }

        let status;
        let message;

        if (decimalHours <= 8) {
            status = "On Time";
            message = "Good job!";
        } else if (decimalHours <= 9) {
            status = "Late";
            message = "Please be on time tomorrow.";
        } else {
            status = "Very Late";
            message = "Report to your supervisor.";
        }

        const nextCount = checkCount + 1;
        setCheckCount(nextCount);

        setError("");
        setResult({
            name: trimmedName,
            decimalHours,
            readableTime: decimalToReadableTime(decimalHours),
            status,
            message,
            employeeId: `EMP-${String(nextCount).padStart(3, "0")}`,
        });
    };

    const handleReset = () => {
        setName("");
        setTimeIn("");
        setError("");
        setResult(null);
    };

    return (
        <div className="attendance-page">
            <div className="attendance-card">
                <div className={`attendance-side attendance-side-left${result ? "" : " attendance-side-left-solo"}`}>
                    <h1 className="attendance-heading">Employee Attendance</h1>

                    <div className="attendance-field">
                        <label className="attendance-label">Employee Name</label>
                        <input
                            type="text"
                            className="attendance-input"
                            placeholder="Enter employee name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="attendance-field">
                        <label className="attendance-label">Time In</label>
                        <input
                            type="number"
                            step="0.01"
                            className="attendance-input"
                            placeholder="e.g. 8.5"
                            value={timeIn}
                            onChange={handleTimeChange}
                        />
                        <p className="attendance-helper">Enter time as decimal hours (8.5 = 8:30 AM)</p>
                    </div>

                    {error && <p className="attendance-error">{error}</p>}

                    <div className="attendance-buttons">
                        <button className="attendance-btn attendance-btn-primary" onClick={handleCheck}>
                            Check Attendance
                        </button>
                        <button className="attendance-btn attendance-btn-secondary" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </div>

                {result && (
                    <div className="attendance-side attendance-side-right">
                        <div className={`id-card id-card-${result.status.toLowerCase().replace(/\s+/g, "-")}`}>
                            <div className="id-card-topbar">
                                <span className="id-card-org">EMPLOYEE ID</span>
                            </div>

                            <div className="id-card-body">
                                <div className="id-card-photo-col">
                                    <img src={defaultProfile} alt="Employee profile" className="id-card-photo" />
                                    <span className="id-card-code">{result.employeeId}</span>
                                </div>

                                <div className="id-card-details-col">
                                    <p className="id-card-name">{result.name}</p>
                                    <span className="id-card-sublabel">EMPLOYEE</span>

                                    <div className="id-card-info">
                                        <div className="id-card-info-row">
                                            <span className="id-card-info-label">TIME IN</span>
                                            <span className="id-card-info-value">{result.readableTime}</span>
                                        </div>
                                        <div className="id-card-info-row">
                                            <span className="id-card-info-label">STATUS</span>
                                            <span className="id-card-status-badge">{result.status.toUpperCase()}</span>
                                        </div>
                                        <div className="id-card-info-row">
                                            <span className="id-card-info-label">FOLLOW-UP</span>
                                            <span className="id-card-info-value">{result.message}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="id-card-footer">
                                <div className="id-card-barcode">
                                    {Array.from({ length: 85 }).map((_, index) => (
                                        <span key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AttendanceChecker;
