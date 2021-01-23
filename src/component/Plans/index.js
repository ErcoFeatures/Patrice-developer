import React from 'react';
import './style.css'
import CheckIcon from '@material-ui/icons/Check'

const plans = [
    {
        title: "PRO",
        price: "$ 1500",
        features: [
            "Web site",
        ]
    }, {
        title: "EMPIRE",
        price: "$ 2000",

        features: [
            "Web site",
            "Online reputation",
            "Maintenance (1 month)"
        ]
    }, {
        title: "UNICORN",
        price: "$ 3500",
        features: [
            "Web site",
            "Online reputation",
            "Maintenance (3 month)"
        ]
    }
]
const Plans = () => {

    return (
        <div className="section__plan">
            <div className="plan__cards__container main__content" id="service__plan">
                {
                    plans.map((el, index) =>
                        <div key={index} className="plan__card__container card">
                            <div className="plan__card__title">
                                {el.title}
                            </div>
                            <div className="plan__card__upgrade">
                                <div className="plan__card__upgrade__price">
                                    {el.price}
                                </div>
                                <div className="plan__card__features">
                                    {el.features.map(f =>
                                        <div className="plan__card__feature">
                                            <CheckIcon/>
                                            <span className="plan__card__feature__text"> {f}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Plans;