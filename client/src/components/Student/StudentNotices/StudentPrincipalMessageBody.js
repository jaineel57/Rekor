import React from 'react'
import companylogo from  '../companylogo.png'

export default function StudentPrincipalMessageBody() {
    return (
        <div style = {{ margin: "30px" }}>
            <div style = {{ width: "25%", backgroundColor: "yellowgreen" }}>
                <div style = {{ height: "90px", alignItems: "center" }}>
                    <div style = {{ margin: "auto", overflow: "hidden", width: "auto", height: "100%" }}>
                        <img style = {{ margin: "auto", overflow: "hidden", maxHeight: "100%", width: "auto", borderRadius: "50%", backgroundColor: "#102a82" }} src = { companylogo } alt = "companylogo"/>
                    </div>
                </div>
            </div>
            <div style = {{ backgroundColor: "yellow", float: "right", width: "74%", overflowY: "scroll", height: "200px", marginTop: "0px", alignItems: "center" }}>
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", paddingBottom: "15px" }}>Dear Students, Parents and Colleagues</span>
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", textAlign: "left", paddingBottom: "15px" }}>Mothers Global School is not just a school but it is home away from home for our students, a place where they find a caring, stimulating environment where students are nurtured, challenged, educated and given every opportunity to reach their full potential.</span> 
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", textAlign: "left", paddingBottom: "15px" }}>It’s a place where unwavering belief in your child’s potential allows them to build personally, socially and academically together with love, attention, respect, warmth, values and training for life.</span> 
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", textAlign: "left", paddingBottom: "15px" }}>
                Their mentors and guides believe that every student is special and blessed, they require handholding and support as they walk alongside to ensure that the students become global citizens equipped with a vast set of life skills to pursue their passion and make this world a better place to live in.</span>
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", paddingBottom: "15px" }}>Jane Doe</span>
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", paddingBottom: "15px" }}>Principal</span>
                <span style = {{ float: "left", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", paddingBottom: "15px" }}>Mothers Global School</span>
            </div>
        </div>
    )
}
