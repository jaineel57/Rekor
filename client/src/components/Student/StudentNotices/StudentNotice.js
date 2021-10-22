import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Button } from '@material-ui/core';
import StudentPersonalInboxBody from './StudentPersonalInboxBody';

export default function StudentNotice() {
    return (
        <div style = {{ marginTop: "180px" }}>
            <div style = {{float: "left", marginLeft: "51px", alignItems: "center", display: "inline-flex" }}>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#4D4D4D" }}>Home</span>
                <span style = {{ color: "#4D4D4D" }}>
                    <ArrowForwardIosRoundedIcon/>
                </span>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#4D4D4D", textDecoration: "underline" }}>Notices</span>
            </div>
            <br/>
            <div style = {{ marginTop: "89px", paddingLeft: "52px", paddingRight: "160px" }}>
                <div style = {{ width: "50%", float: "left", marginBottom: "33px" }}>
                    <div style = {{ height: "335px", width: "649px", border: "1px solid #E7E7E7", boxSizing: "border-box", boxShadow: "0px 2px 7px rgba(52, 52, 52, 0.35)", borderRadius: "5px" }}>
                        <div style = {{ padding: "5px", width: "auto", height: "57px", backgroundColor: "#F9F9F9", borderRadius: "4px 4px 0px 0px", textAlign: "left" }}>
                            <span style = {{ padding: "17px", alignItems: "center", display: "inline-flex", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px" }}>Personal Inbox</span>
                        </div>
                        <StudentPersonalInboxBody/>
                    </div>
                    <br/>
                    <br/>
                    <div style = {{ height: "335px", width: "649px", border: "1px solid #E7E7E7", boxSizing: "border-box", boxShadow: "0px 2px 7px rgba(52, 52, 52, 0.35)", borderRadius: "5px" }}>
                        <div style = {{ padding: "5px", width: "auto", height: "57px", backgroundColor: "#F9F9F9", borderRadius: "4px 4px 0px 0px", textAlign: "left" }}>
                            <span style = {{ padding: "17px", alignItems: "center", display: "inline-flex", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px" }}>Principal Message</span>
                        </div>                    
                    </div>
                </div>
                <div style = {{ width: "50%", float: "right" }}>
                    <div style = {{ height: "700px", width: "722px", border: "1px solid #E7E7E7", boxSizing: "border-box", boxShadow: "0px 2px 7px rgba(52, 52, 52, 0.35)", borderRadius: "5px" }}>
                        <div style = {{ padding: "5px", width: "auto", height: "57px", backgroundColor: "#F9F9F9", borderRadius: "4px 4px 0px 0px", textAlign: "left" }}>
                            <span style = {{ padding: "17px", alignItems: "center", display: "inline-flex", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px" }}>Notice</span>
                            <Button style = {{ float: "right", backgroundColor: "#ECECEC", borderRadius: "5px", margin: "auto", height: "40px", marginRight: "46px", marginTop: "12px", color: "#8E8A8A", fontSize: "18px", fontStyle: "normal", fontFamily: "sans-serif", fontWeight: "bold" }}>Overall</Button>
                            <Button style = {{ float: "right", backgroundColor: "#214DF9", borderRadius: "5px", margin: "auto", height: "40px", marginRight: "46px", marginTop: "12px", color: "white", fontSize: "18px", fontStyle: "normal", fontFamily: "sans-serif", fontWeight: "bold" }}>Class</Button>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}
