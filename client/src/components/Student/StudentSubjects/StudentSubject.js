import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

export default function StudentSubject() {
    return (
        <>
        <div style = {{ marginTop: "180px", paddingLeft: "51px", paddingRight: "127px" }}>
            <div style = {{ display: "inline-flex", float: "left" }}>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#4D4D4D" }}>Home</span>
                <span style = {{ color: "#4D4D4D" }}>
                    <ArrowForwardIosRoundedIcon/>
                </span>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#4D4D4D", textDecoration: "underline" }}>Subjects</span>
            </div>
        </div>
        <br/>
        <div style = {{ marginTop: "81px", paddingLeft: "51px", paddingRight: "127px" }}>
            <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Subject 1</span>
                <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                    <KeyboardArrowDownRoundedIcon/>
                </span>
            </div>
            <br/>
            <br/>
            <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Subject 2</span>
                <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                    <KeyboardArrowDownRoundedIcon/>
                </span>
            </div>
            <br/>
            <br/>
            <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Subject 3</span>
                <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                    <KeyboardArrowDownRoundedIcon/>
                </span>
            </div>
            <br/>
            <br/>
            <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Subject 4</span>
                <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                    <KeyboardArrowDownRoundedIcon/>
                </span>
            </div>
            <br/>
            <br/>
            <div style = {{ height: "102px", backgroundColor: "#FDFDFD", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                <span style = {{ paddingLeft: "64px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "24px", color: "#646464", float: "left", paddingTop: "37px" }}>Subject 5</span>
                <span style = {{ float: "right", paddingRight: "48px", paddingTop: "32px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "500", fontSize: "40px", color: "#646464" }}>
                    <KeyboardArrowDownRoundedIcon/>
                </span>
            </div>
        </div>
        </>
    )
}
