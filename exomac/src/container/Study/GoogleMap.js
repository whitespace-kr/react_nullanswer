import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5498329546185!2d127.12007881592658!3d37.494948179811445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5d359b4af07%3A0x4a6c654de23e7728!2zU2VvdWwsIFNvbmdwYS1ndSwgR2FyYWstZG9uZywgSnVuZ2RhZS1ybywgMTM1IOyVhOydtO2LsOuypOyymO2DgOybjA!5e0!3m2!1sen!2skr!4v1626920175336!5m2!1sen!2skr"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
