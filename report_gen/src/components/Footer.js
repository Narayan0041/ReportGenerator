import React from "react";
import FooterIconContainer from "./Footer/FooterIconContainer";
import FooterLinksSection from "./Footer/FooterLinksSection";
import FooterInfo from "./Footer/FooterInfo";
import ReviewSlider from "./Review/ReviewSlider";
import GetStartComponent from "./GetStartComponent";
import PlatForm from "./PlatFormContainer/PlatForm";
import Review from "./Review/Review";
export default function Footer() {
    return (
        <>
            <div className="footerSection">
                <div className="footerContainer">
                    <div className="slider">
                        <PlatForm/>
                        <Review/>
                    </div>
                    <GetStartComponent />
                    <FooterIconContainer />
                    <FooterLinksSection />
                    <FooterInfo />
                </div>
            </div>
        </>
    )
}