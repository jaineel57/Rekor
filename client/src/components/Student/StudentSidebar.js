import React from 'react'
import companylogo from  './companylogo.png'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export default function StudentSidebar() {
    return (
        <>
        <div style = {{ backgroundColor: "#040513", background: "linear-gradient(179.21deg, rgba(4,5,19,0.85) 6.55%, rgba(4,5,19,0.8) 35.17%, rgba(4,5,19,0.77) 64.84%, rgba(4,5,19,0.85) 99.32%)", position: "fixed", width: "9.5%", float: "left", height: "93%", margin: "auto", textAlign: "center" }}>
            <div style = {{ margin: "auto", overflow: "hidden", width: "auto", height: "98px", paddingTop: "20px" }}>
                <img style = {{ margin: "auto", overflow: "hidden", maxHeight: "100%", width: "91px" }} src = { companylogo } alt = "companylogo"/>
            </div>
            <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bolder", fontSize: "18px", lineHeight: "21px", color: "white" }}>Company</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style = {{ textAlign: "left", paddingLeft: "16px" }}>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <DashboardRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Home</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <MenuBookRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Subjects</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <NoteRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Assignments</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <PeopleAltRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Teachers</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <LocalAtmRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Fees</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <EventNoteRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Exams</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style= {{ display: "inline-flex", alignItems: "center" }}>
                        <NotificationsRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                        &nbsp;
                        &nbsp;
                        <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Notices</span>
                    </div>
            </div>
        </div>
        <div style = {{ backgroundColor: "#FF2934", position: "fixed", width: "9.5%", float: "left", height: "7%", margin: "auto", textAlign: "center", bottom: "0%" }}>
            <div style = {{ textAlign: "left", paddingLeft: "16px" }}>
                <div style= {{ display: "inline-flex", alignItems: "center", padding: "5%", paddingTop: "10%" }}>
                    <ExitToAppRoundedIcon style = {{ color: "white", width: "29px", height: "33px" }}/>
                            &nbsp;
                            &nbsp;
                            <span style = {{ color: "white", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px" }}>Logout</span>
                </div>
            </div>
        </div>
        </>
    )
}
