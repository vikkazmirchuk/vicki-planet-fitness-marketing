import './HomeBannerSlider.scss'
import React, { useEffect, useState } from "react";

function HomeBannerSlider (props) {
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const active = props.items.find( i => i.active);
        
        setActiveItem(active);
    }, []);

    const changeActiveItem = (index) => {
        const activeItem = props.items.find( i => i.active);
        console.log(activeItem);
        if (activeItem) {
            activeItem.active = false;
        }
        props.items[index].active = true;

        setActiveItem(props.items[index]);
    }
    
    return (
        <div className={'home-banner-slider'}>
            <div className={'slider-image-item'}>
                {activeItem && <img src={activeItem.imageSrc} alt={activeItem.imageAlt}/>}
            </div>
            <div className={'slider-navigation-bar'}>
                {props.items.map((item, index) => {
                    return <div key={index}
                                className={[
                                    'navigation-bar-item',
                                    item.active ? 'active' : '',
                                ].join(' ')}
                                onClick={() => changeActiveItem(index)}
                    ></div>
                })}
            </div>
        </div>
    );
}

export default HomeBannerSlider;