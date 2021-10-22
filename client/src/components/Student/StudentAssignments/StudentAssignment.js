import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import StudentAssignmentTable from './StudentAssignmentTable';

export default function StudentAssignment() {
    return (
        <div>
            <div style = {{ marginTop: "180px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ display: "inline-flex", float: "left" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#4D4D4D" }}>Home</span>
                    <span style = {{ color: "#4D4D4D" }}>
                        <ArrowForwardIosRoundedIcon/>
                    </span>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#4D4D4D", textDecoration: "underline" }}>Assignments</span>
                </div>
            </div>
            <br/>
            <div style = {{ marginTop: "69px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ display: "inline-flex", float: "left", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px" }}>Filters:-</span>
                    &nbsp;
                    &nbsp;
                    <div style = {{ backgroundColor: "#C4C4C4", borderRadius: "5px", width: "171px", height: "35px", alignItems: "center", display: "inline-flex" }}>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Subject Name</span>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>
                            <KeyboardArrowDownRoundedIcon/>
                        </span>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div style = {{ backgroundColor: "#C4C4C4", borderRadius: "5px", width: "171px", height: "35px", alignItems: "center", display: "inline-flex" }}>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Assigned Date</span>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>
                            <KeyboardArrowDownRoundedIcon/>
                        </span>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div style = {{ backgroundColor: "#C4C4C4", borderRadius: "5px", width: "171px", height: "35px", alignItems: "center", display: "inline-flex" }}>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Due Date</span>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>
                            <KeyboardArrowDownRoundedIcon/>
                        </span>
                    </div>
                </div>
            </div>
            <br/>
            <div style = {{ marginTop: "69px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ display: "inline-flex", float: "left", alignItems: "center" }}>
                    <div style = {{ backgroundColor: "#214DF9", borderRadius: "5px", width: "auto", height: "35px", alignItems: "center", display: "inline-flex", margin: "auto", color: "white" }}>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", padding: "10px" }}>Weekly</span>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "300", fontSize: "18px", color: "#7E7E7E" }}>Monthly</span>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "300", fontSize: "18px", color: "#7E7E7E" }}>Overview</span>
                </div>
            </div>
            <br/>
            <div style = {{ marginTop: "30px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ height: "75px", background: "linear-gradient(180deg, #FDFDFD 0%, rgba(245, 245, 245, 0.92) 100%)", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                    <span style = {{ paddingLeft: "64px", marginTop: "25px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "24px", float: "left" }}>Assignments</span>
                </div>
            </div>
            <StudentAssignmentTable/>
        </div>
    )
}
