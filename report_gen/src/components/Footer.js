import React from "react";
import FooterIconContainer from "./Footer/FooterIconContainer";
import FooterLinksSection from "./Footer/FooterLinksSection";
import FooterInfo from "./Footer/FooterInfo";
import ReviewSlider from "./Review/ReviewSlider";
export default function Footer() {
    return (
        <>
                <div className="footerSection">
                    <div className="footerContainer">
                        <div className="slider">
                        <ReviewSlider/>

                        </div>
                       <FooterIconContainer/>
                       <FooterLinksSection/>
                       <FooterInfo/>
                    </div>
                </div>
        </>
    )
}