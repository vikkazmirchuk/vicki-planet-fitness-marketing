import './WhatsNewCardItem.scss'
import React from "react";

function WhatsNewCardItem (props) {
    return (
        <div className={'whats-new-card'}>
            <div className={'card-image'}>
                <img src={props.image} alt={props.altImage}/>
            </div>
            <h3 className={'card-title'}>{props.title}</h3>
            <div className={'card-description'}>{props.description}</div>
            <div className={'card-action-button'}>
                <button
                    type={'button'}
                    className={[
                        'button',
                        'primary',
                    ].join(' ')}
                    onClick={() => {
                        props.onButtonClick();
                    }}
                >
                    {props.buttonName}
                </button>
            </div>
        </div>
    );
}

export default WhatsNewCardItem;