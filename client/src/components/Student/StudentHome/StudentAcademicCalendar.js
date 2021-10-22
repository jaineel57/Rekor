import React from 'react'

export default function StudentAcademicCalendar() {
    return (
        <div style = {{ width: "750px", height: "470px", border: "1px solid #E7E7E7", boxSizing: "border-box", borderRadius: "10px", boxShadow: "0px 4px 4px 3px rgba(240, 240, 240, 0.39)", padding: "5px" }}>
            <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left" }}>Academic Calendar</span>
                    <div>
                        <div style = {{ float: "right", borderRadius: "5px", boxShadow: "0px 1px 5px rgba(33, 33, 33, 0.48)", height: "36px", width: "122px", alignItems: "center", display: "inline-flex" }}>
                            <span style = {{ display: "inline-flex", alignItems: "center", margin: "auto" }}>Current Year</span>
                        </div>
                        <div style = {{ float: "right", backgroundColor: "#E0DDDD", borderRadius: "5px", boxShadow: "0px 1px 5px rgba(33, 33, 33, 0.48)", height: "36px", width: "122px", alignItems: "center", display: "inline-flex" }}>
                            <span style = {{ display: "inline-flex", alignItems: "center", margin: "auto" }}>Current Month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style = {{ backgroundColor: "yellow", padding: "15px" }}>
                <span>M</span>
            </div>
        </div>
    )
}
