import React from 'react';
import SEO from '../components/SEO';
import Headers from '../partials/header/Header';
import Breadcrumb from '../container/Study/Breadcrumb';
import ContactInformation from '../container/Study/ContactInformation';
import GoogleMap from '../container/Study/GoogleMap';
import ContactFromContainer from '../container/Study/ContactFromContainer';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../container/Study/Footer';

const Test2 = () => {
    return <React.Fragment>
    <SEO title="Nullanswer || Contact" />
    <Headers />
    <Breadcrumb 
        image="images/study/seoul.jpg"
        title="We are an agency located in Seoul"
        content="Home"
        contentTwo="Contact Us"
    />
    <ContactInformation />
    <GoogleMap />
    <ContactFromContainer />
    <Footer />
    <ScrollToTop />
</React.Fragment>
}

export default Test2;