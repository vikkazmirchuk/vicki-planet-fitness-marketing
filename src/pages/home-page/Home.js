import React from 'react';

import './Home.scss';
import viatouchLogo from "../../assets/img/viatouch-logo.png";
import whatsNewCardImage1 from "../../assets/img/home-page/whatsnew-card-image-1.webp";
import whatsNewCardImage2 from "../../assets/img/home-page/whatsnew-card-image-2.webp";
import WhatsNewCardItem from "../../components/whats-new-card-item/WhatsNewCardItem";
import HomeBannerSlider from "../../components/home-banner-slider/HomeBannerSlider";
import { HomeBannerSliderItems } from "../../constants/home-banner-slider-items";

function Home(props) {
    return (
        <div className={'page-wrapper'}>
            <div className={'home-banner'}>
                <div className="right-part">
                    <div className={'logo'}>
                        <img src={viatouchLogo} alt="Viatouch Logo"/>
                    </div>

                    <div className={'home-banner-title'}>
                        YOUR APPROVED FITNESS EQUIPMENT VENDOR
                    </div>
                    
                    <div className={'mb-20'}>
                        <button
                            type={'button'}
                            className={[
                                'button',
                                'secondary',
                            ].join(' ')}
                            onClick={() => {
                                console.log('Virtual Reality Tour');
                            }}
                        >
                            VIRTUAL REALITY TOUR
                        </button>
                    </div>
                    
                    <div className={'home-banner-link-button'}>
                        <a href="https://www.google.com" target={'_blank'}>SIGN UP FOR UPCOMING WEBINARS</a>
                    </div>
                </div>
                <div className="left-part">
                    <HomeBannerSlider items={HomeBannerSliderItems} />
                </div>
            </div>
            
            <div className={'whats-new-section'}>
                <h2 className="section-title mt-0 mb-20">What's new?</h2>
                <div className="whats-new-cards-wrapper">
                    <WhatsNewCardItem
                        image={whatsNewCardImage1}
                        altImage={'Functional'}
                        title={'Functional'}
                        description={'Experience the Unmatched Fit & Function of the Connexus Series'}
                        buttonName={'LEARN MORE'}
                        onButtonClick={() => console.log('Learn More Clicked')}
                    />
                    <WhatsNewCardItem
                        image={whatsNewCardImage2}
                        altImage={'Upcoming webinars'}
                        title={'Upcoming webinars'}
                        description={'Cardio • Strength • Functional'}
                        buttonName={'SIGN UP'}
                        onButtonClick={() => console.log('Sign Up Clicked')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
