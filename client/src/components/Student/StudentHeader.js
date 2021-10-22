import React from 'react'
import companylogo from  './companylogo.png'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { Button } from '@material-ui/core';

export default function StudentHeader() {
    return (
        <div style = {{ width: "100%", height: "130px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", position: "fixed", overflow: "hidden" }}>
            <div style = {{ float: "left", display: "inline-flex", alignItems: "center" }}>
                <div style = {{ margin: "auto", overflow: "hidden", width: "auto", height: "95px", padding: "18px" }}>
                    <img style = {{ margin: "auto", overflow: "hidden", maxHeight: "100%", width: "95px" }} src = { companylogo } alt = "companylogo"/>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bolder", fontSize: "25px" }}>School Name</span>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <div style = {{ border: "0.5px solid black", height: "60px" }}></div>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <span style = {{ fontFamily: "sans-serif", fontStyle: "italic", fontWeight: "300", fontSize: "18px" }}>Powered By Company</span>
            </div>
            <div style = {{ display: "inline-flex", alignItems: "center", position: "relative", marginLeft: "300px" }}>
                <Button style = {{ width: "300px", height: "65px", backgroundColor: "#6755D9", color: "white", borderRadius: "15px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "15px"}}>View Performance Analytics</Button>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <EmailRoundedIcon style = {{ color: "#6755D9", width: "40px", height: "40px" }}/>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NotificationsRoundedIcon style = {{ color: "#6755D9", width: "40px", height: "40px" }}/>
                &nbsp;
                &nbsp;
                <div style = {{ margin: "auto", overflow: "hidden", width: "auto", height: "50px", padding: "35px" }}>
                    <img style = {{ margin: "auto", overflow: "hidden", maxHeight: "100%", width: "50px", borderRadius: "50%", backgroundColor: "#102a82" }} src = { companylogo } alt = "companylogo"/>
                </div>
            </div>
        </div>
    )
}
