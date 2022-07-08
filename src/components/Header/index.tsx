import React from 'react';
import Menu from "@/components/Header/Menu";
import Phone from "@/components/Header/Phone";
import Basket from "@/components/Header/Basket";

const Index = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrap">
                    <a href="#" className="logo-header">
                        <img src="/img/svg/Logo.svg" alt="Pizza Menu" className="logo-header__img"/>
                    </a>
                    <Menu />
                    <Phone/>
                    <Basket/>
                    <button className="language">
                        <span className="language__text">EN</span>
                    </button>
                    <div className="mobile-burger">
                        <img src="/img/svg/mobile-menu.svg" alt="" className="mobile-burger__icon"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Index;