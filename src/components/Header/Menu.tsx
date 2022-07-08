import React from 'react';

const Menu = () => {
    return (
        <nav className="navigation">
            <img src="/img/svg/logo-mobile-menu.svg" alt="" className="logo-mobile"/>
            <div className="navigation__list">
                <div className="navigation__link">
                    <a href="#">Меню</a>
                </div>
                <div className="navigation__link">
                    <a href="#">О нас</a>
                </div>
                <div className="navigation__link">
                    <a href="#">Контакты</a>
                </div>
            </div>
            <div className="about-mobile">
                <img src="/img/svg/Menu-close.svg" alt="" className="close-button"/>
                <div className="about-mobile__title">Заказать по&nbsp;телефону</div>
                <a href="tel:+79184326587" className="about-mobile__phone">+7 (918) 432-65-87</a>
                <div className="about-mobile__time">Ежедневно с&nbsp;9:00 до&nbsp;23:00</div>
            </div>
            <div className="language-mobile">
                <a href="#" className="language-mobile__button">English</a>
            </div>
        </nav>
    );
};

export default Menu;