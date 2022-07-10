import React, { useState } from 'react';
import Menu from '@/components/Header/Menu';
import Phone from '@/components/Header/Phone';
import Basket from '@/components/Header/Basket';

const Index = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrap">
                    <a href="#" className="logo-header">
                        <img
                            src="/img/svg/Logo.svg"
                            alt="Pizza Menu"
                            className="logo-header__img"
                        />
                    </a>
                    <Menu isOpen={isOpen} toggleOpen={toggleOpen} />
                    <Phone />
                    <Basket />
                    <a className="language">
                        <span className="language__text">EN</span>
                    </a>
                    <div className="mobile-burger">
                        <a role="button" onClick={toggleOpen} tabIndex={0} onKeyDown={toggleOpen}>
                            <img
                                src="/img/svg/mobile-menu.svg"
                                alt=""
                                className="mobile-burger__icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Index;
