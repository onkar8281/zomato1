import React from 'react';

function City() {
    return (
        <div className="localities-section">
            <h2>Popular localities in and around Ahmedabad</h2>
            <div className="localities-list">
                <div className="locality-item">
                    <span className="locality-name">Bodakdev</span>
                    <span className="places-count">482 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">Navrangpura</span>
                    <span className="places-count">409 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">Prahlad Nagar</span>
                    <span className="places-count">250 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">Satellite</span>
                    <span className="places-count">421 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">Vastrapur</span>
                    <span className="places-count">304 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">C G Road</span>
                    <span className="places-count">113 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">Gurukul</span>
                    <span className="places-count">124 places</span>
                </div>
                <div className="locality-item">
                    <span className="locality-name">Thaltej</span>
                    <span className="places-count">462 places</span>
                </div>
            </div>
            <a href="#" className="see-more">See more</a>
        </div>
    );
}

export default City;
