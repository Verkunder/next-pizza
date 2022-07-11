import React from 'react';

const About = () => (
    <div className="posts">
        <div className="wrapper">
            <div className="about">
                <div className="about__img">
                    <img src="/img/jpg/about01.jpg" alt="" />
                </div>
                <div className="about__info">
                    <div className="about__info-title">
                        Изготавливаем пиццу по&nbsp;своим рецептам в&nbsp;лучших традициях
                    </div>
                    <div className="about__info-text">
                        Наша пицца получается сочной, вкусной и&nbsp;главное хрустящей с&nbsp;нежной
                        и&nbsp;аппетитной начинкой, готовим по&nbsp;своим итальянским рецептам
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="about__info">
                    <div className="about__info-title">Используем только свежие ингридиенты</div>
                    <div className="about__info-text">
                        Ежедневно заготавливаем продукты и&nbsp;овощи для наших пицц, соблюдаем все
                        сроки хранения
                    </div>
                </div>
                <div className="about__img">
                    <img src="/img/jpg/about02.jpg" alt="" />
                </div>
            </div>
            <div className="about">
                <div className="about__img">
                    <img src="/img/jpg/about03.jpg" alt="" />
                </div>
                <div className="about__info">
                    <div className="about__info-title">
                        Доставка в&nbsp;течение 60&nbsp;минут или заказ за&nbsp;нас счёт
                    </div>
                    <div className="about__info-text">
                        Все наши курьеры&nbsp;&mdash; фанаты серии Need for Speed и&nbsp;призеры
                        гонок World Rally Championship и&nbsp;World Superbike во&nbsp;всех
                        категориях
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
