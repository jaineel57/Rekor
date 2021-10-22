import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

export default function StudentExam() {
    return (
        <div style = {{ marginTop: "180px" }}>
            <div style = {{float: "left", marginLeft: "51px", alignItems: "center", display: "inline-flex" }}>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#4D4D4D" }}>Home</span>
                <span style = {{ color: "#4D4D4D" }}>
                    <ArrowForwardIosRoundedIcon/>
                </span>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#4D4D4D", textDecoration: "underline" }}>Exams</span>
            </div>
            <br/>
            <div style = {{ marginTop: "81px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                    <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Exams</span>
                    <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                        <KeyboardArrowDownRoundedIcon/>
                    </span>
                </div>
            </div>
            <br/>
            <br/>
            <div style = {{ paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                    <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Class Tests</span>
                    <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                        <KeyboardArrowDownRoundedIcon/>
                    </span>
                </div>
            </div>
        </div>
    )
}
