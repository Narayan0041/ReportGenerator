import React from 'react'
import ShowCase from '../ShowCase/ShowCase'
import PlatForm from '../PlatFormContainer/PlatForm'
import Review from '../Review/Review'
import Footer from '../Footer/Footer';
import GetStartComponent from '../GetStartComponent';
import IntroPoster from '../Poster/IntroPoster';
import Navbar from '../Navbar/Navbar';
import "../../index.css"
import HeroSection from '../HeroSection/HeroSection';
import AdSliderSection from '../AdSection/AdSilderSection';


export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ShowCase />
            <div className="slider">
                <PlatForm />
                <AdSliderSection />
                <IntroPoster />
                <Review />
            </div>
            <GetStartComponent />
            <Footer />
        </div>
    )
}
