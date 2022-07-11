import React, { FC, LegacyRef } from 'react';

interface MenuProprs {
    isOpen: boolean;
    toggleOpen: () => void;
    menuRef: LegacyRef<HTMLElement>;
}

const Menu: FC<MenuProprs> = ({ isOpen, toggleOpen, menuRef }) => (
    <nav className={!isOpen ? 'navigation' : 'navigation open'} ref={menuRef}>
        <img src="/img/svg/logo-mobile-menu.svg" alt="" className="logo-mobile" />
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
            <a role="button" tabIndex={0} onClick={toggleOpen} onKeyDown={toggleOpen}>
                <img src="/img/svg/Menu-close.svg" alt="" className="close-button" />
            </a>
            <div className="about-mobile__title">Заказать по&nbsp;телефону</div>
            <a href="tel:+79184326587" className="about-mobile__phone">
                +7 (918) 432-65-87
            </a>
            <div className="about-mobile__time">Ежедневно с&nbsp;9:00 до&nbsp;23:00</div>
        </div>
        <div className="language-mobile">
            <a href="#" className="language-mobile__button">
                English
            </a>
        </div>
    </nav>
);

export default Menu;
