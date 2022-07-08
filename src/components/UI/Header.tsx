import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrap">
                    <a href="#" className="logo-header">
                        <img src="/local/static/img/svg/Logo.svg" alt="Pizza Menu" className="logo-header__img"/>
                    </a>
                    <button className="language">
                        <span className="language__text">EN</span>
                    </button>
                    <div className="mobile-burger">
                        <img src="/local/static/img/svg/mobile-menu.svg" alt="" className="mobile-burger__icon"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;