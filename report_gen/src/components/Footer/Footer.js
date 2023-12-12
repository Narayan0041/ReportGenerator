import React from "react";
import FooterIconContainer from "./FooterIconContainer";
import FooterLinksSection from "./FooterLinksSection";
import FooterInfo from "./FooterInfo";
export default function Footer() {
    return (
        <>
            <div className="footerSection">
                <div className="footerContainer">
                    <FooterIconContainer />
                    <FooterLinksSection />
                    <FooterInfo />
                </div>
            </div>
        </>
    )
}