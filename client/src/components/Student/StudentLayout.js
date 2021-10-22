import React from 'react'
import StudentAssignment from './StudentAssignments/StudentAssignment'
import StudentExam from './StudentExams/StudentExam'
import StudentFee from './StudentFees/StudentFee'
import StudentHeader from './StudentHeader'
import StudentHome from './StudentHome/StudentHome'
import StudentNotice from './StudentNotices/StudentNotice'
import StudentSidebar from './StudentSidebar'
import StudentSubject from './StudentSubjects/StudentSubject'
import StudentTeacher from './StudentTeachers/StudentTeacher'

export default function StudentLayout() {
    return (
        <div style = {{ boxSizing: "border-box" }}>
            <StudentSidebar/>
            <div style = {{ width: "90.5%", float: "right", height: "100%", margin: "auto" }}>
                <StudentHeader/>
                <StudentHome/>
            </div>
        </div>
    )
}
