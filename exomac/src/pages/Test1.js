import React from "react";
import SEO from "../components/SEO";
import IntroSlider from "../container/Study/TestSlider";
import ProfileItems from "../container/Study/ProfileItems";
import Footer from "../container/Study/Footer";
import Headers from "../partials/header/Header"

const Test1 = () => {
    return <React.Fragment>
        <SEO title="Nullanswer || About" />
        <Headers/>
        <IntroSlider/>
        <ProfileItems/>
        <Footer/>
    </React.Fragment>
}

export default Test1;