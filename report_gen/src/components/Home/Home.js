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

export default function Home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <ShowCase/>
            <div className="slider">
                <PlatForm />
                <IntroPoster/>
                <Review />
            </div>
            <GetStartComponent />
            <Footer/>
        </div>
    )
}
