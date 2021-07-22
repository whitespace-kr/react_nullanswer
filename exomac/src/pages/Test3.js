import React from 'react';
import SEO from '../components/SEO';
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Study/Breadcrumb';
import Footer from '../container/Study/Footer';
import WorkData from "../container/Study/Contents/WorkDetails.json";
import WorkDetailsContainer from '../container/Study/WorkDetailsContainer';
import ScrollToTop from '../components/ScrollToTop.jsx';



const Test3 = ({match: {params: {id}}}) => {
    const workId = parseInt(id, 10)
    const data = WorkData.filter(work => work.id === workId);
    return (
        <React.Fragment>
            <SEO title="Nullanswer || Work Details" />
            <Header />
            <Breadcrumb 
                image="images/study/seoul.jpg"
                title="We are an agency located in Seoul"
                content="Home"
                contentTwo="Contact Us"
            />
            <WorkDetailsContainer data={data[0]} />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

Test3.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}

export default Test3;