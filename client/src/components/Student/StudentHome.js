import React from 'react'
import StudentNavbar from './StudentNavbar'
import StudentSidebar from './StudentSidebar'

export default function StudentHome() {
    return (
        <div>
            <StudentSidebar/>
            <div style = {{ width: "91.5" }}>
                <StudentNavbar/>
            </div>
        </div>
    )
}
