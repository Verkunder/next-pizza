import React from 'react';

const Phone = () => {
    return (
        <a href="tel:+79184326587" className="phone-header">
            <div className="phone-header__wrap--icon">
                <img src="/img/svg/telephone.svg" alt="Телефон" className="phone-header__icon"/>
            </div>
            <div className="phone-header__text">
                <div className="phone-header__phone">+7 (918) 432-65-87</div>
                <div className="phone-header__time smallText"> Ежедневно с&nbsp;9:00 до&nbsp;23:00</div>
            </div>
        </a>
    );
};

export default Phone;