import Link from 'next/link';
import React, { FC, LegacyRef, useEffect } from 'react';

interface MenuProprs {
    isOpen: boolean;
    toggleOpen: () => void;
    menuRef: LegacyRef<HTMLElement>;
}

const Menu: FC<MenuProprs> = ({ isOpen, toggleOpen, menuRef }) => {
    const stickyHeader = () => {
        const header = document.getElementsByClassName('header');
        const body = document.getElementsByClassName('body');
        if (window.pageYOffset >= 152) {
            header[0].classList.add('isSticky');
            body[0].classList.add('stickyActive');
        } else {
            header[0].classList.remove('isSticky');
            body[0].classList.remove('stickyActive');
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', stickyHeader);
    }, []);

    return (
        <nav className={!isOpen ? 'navigation' : 'navigation open'} ref={menuRef}>
            <img src="/img/svg/logo-mobile-menu.svg" alt="" className="logo-mobile" />
            <div className="navigation__list">
                <div className="navigation__link">
                    <Link href="/admin">
                        <a>Админ</a>
                    </Link>
                </div>
                <div className="navigation__link">
                    <a href="#">О нас</a>
                </div>
                <div className="navigation__link">
                    <Link href="/RHF">
                        <a>Контакты</a>
                    </Link>
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
};

export default Menu;
