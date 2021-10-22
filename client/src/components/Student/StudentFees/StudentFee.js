import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import StudentFeeTable from './StudentFeeTable';

export default function StudentFee() {
    return (
        <div style = {{ marginTop: "180px" }}>
            <div style = {{float: "left", marginLeft: "51px", alignItems: "center", display: "inline-flex" }}>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#4D4D4D" }}>Home</span>
                <span style = {{ color: "#4D4D4D" }}>
                    <ArrowForwardIosRoundedIcon/>
                </span>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#4D4D4D", textDecoration: "underline" }}>Fees</span>
            </div>
            <br/>
            <div style = {{ marginTop: "91px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ display: "inline-flex", float: "left", alignItems: "center" }}>
                    <div style = {{ backgroundColor: "#214DF9", borderRadius: "5px", width: "auto", height: "35px", alignItems: "center", display: "inline-flex", margin: "auto", color: "white" }}>
                        <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", padding: "10px" }}>Academic</span>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "300", fontSize: "18px", color: "#7E7E7E" }}>Transport/Hostel</span>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span style = {{ margin : "auto", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "300", fontSize: "18px", color: "#7E7E7E" }}>Extracurricular</span>
                </div>
            </div>
            <br/>
            <br/>
            <div style = {{ marginTop: "30px", paddingLeft: "51px", paddingRight: "127px" }}>
                <div style = {{ height: "75px", background: "linear-gradient(180deg, #FDFDFD 0%, rgba(245, 245, 245, 0.92) 100%)", border: "2px solid #A4A4A4", borderRadius: "5px", boxSizing: "border-box", width: "100%", alignItems: "center" }}>
                    <span style = {{ paddingLeft: "64px", marginTop: "25px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "24px", float: "left" }}>Academic</span>
                </div>
            </div>
            <StudentFeeTable/>
        </div>
    )
}
