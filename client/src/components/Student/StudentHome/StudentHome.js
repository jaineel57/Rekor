import React from 'react'
import '../../../App.css'
import StudentAcademicCalendar from './StudentAcademicCalendar'
import StudentAttendance from './StudentAttendance'
import StudentDailyHomework from './StudentDailyHomework'
import StudentTimetable from './StudentTimetable'
import StudentUpcomingTest from './StudentUpcomingTest'

export default function StudentHome() {
    return (
        <div style = {{ marginTop: "130px", position: "relative", overflow: "auto" }}>
            <div style = {{ width: "22%", height: "100%", textAlign: "left", padding: "15px", alignItems: "center" }}>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "25px" }}>Hello, <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "25px" }}>First Name</span>&nbsp;&nbsp;<span class="wave">👋</span></span>
                <br/>
                <br/>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "italic", fontWeight: "normal", fontSize: "16px" }}>Quote of the day</span>
                <br/>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#636363" }}>"Two to three lines of a quote will fit here perfectly along with the name of the author."</span>
                <br/>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#636363", float: "right" }}>- Name of the Author</span>
                <br/>
                <br/>
                <br/>
                <br/>
                <StudentTimetable/>
            </div>
            <div style = {{ width: "76.8%", display: "inline-flex", position: "absolute", top: "5px", right: 0 }}>
                <div style = {{ paddingTop: "37px", paddingLeft: "74px", paddingRight: "60px"}}>
                    <div style = {{ height: "404px" }}>
                        <StudentAttendance/>
                        <StudentDailyHomework/>
                    </div>
                    <div style = {{ height: "auto", paddingTop: "10px", paddingBottom: "14px" }}>
                        <StudentAcademicCalendar/>
                        <StudentUpcomingTest/>
                    </div>
                </div>
            </div>         
        </div>
    )
}
