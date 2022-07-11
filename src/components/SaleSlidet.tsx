import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SaleSlidet = () => {
    const [SlideCount, setCount] = useState<number>(3);

    useEffect(() => {
        if (window.screen.width <= 767) setCount(1);
    }, []);

    return (
        <div className="wrapper">
            {SlideCount === 1 ? (
                <Slider
                    slidesToShow={SlideCount}
                    swipeToSlide
                    dots
                    focusOnSelect
                    className="special-list"
                >
                    <a href="#" className="special-list__item">
                        <div className="special-list__img">
                            <img
                                src="/img/jpg/Event%201.jpg"
                                alt="Закажи 2 пиццы – 3-я в подарок"
                                className="special-list__img-item"
                            />
                        </div>
                        <div className="special-list__title">
                            Закажи 2&nbsp;пиццы&nbsp;&mdash; 3-я в&nbsp;подарок
                        </div>
                        <div className="special-list__about">
                            При заказе 2-х больших пицц&nbsp;&mdash; средняя пицца в&nbsp;подарок
                        </div>
                    </a>
                    <a href="#" className="special-list__item">
                        <div className="special-list__img">
                            <img
                                src="/img/jpg/Event%202.jpg"
                                alt="Закажи 2 пиццы – 3-я в подарок"
                                className="special-list__img-item"
                            />
                        </div>
                        <div className="special-list__title">Напиток в&nbsp;подарок</div>
                        <div className="special-list__about">
                            Скидка на&nbsp;заказ от&nbsp;3&nbsp;000 рублей + напиток в&nbsp;подарок
                        </div>
                    </a>
                    <a href="#" className="special-list__item">
                        <div className="special-list__img">
                            <img
                                src="/img/jpg/Event%203.jpg"
                                alt="Закажи 2 пиццы – 3-я в подарок"
                                className="special-list__img-item"
                            />
                        </div>
                        <div className="special-list__title">25% при первом заказе</div>
                        <div className="special-list__about">Скидка новым клиентам!</div>
                    </a>
                </Slider>
            ) : (
                <div className="special-list">
                    <a href="#" className="special-list__item">
                        <div className="special-list__img">
                            <img
                                src="/img/jpg/Event%201.jpg"
                                alt="Закажи 2 пиццы – 3-я в подарок"
                                className="special-list__img-item"
                            />
                        </div>
                        <div className="special-list__title">
                            Закажи 2&nbsp;пиццы&nbsp;&mdash; 3-я в&nbsp;подарок
                        </div>
                        <div className="special-list__about">
                            При заказе 2-х больших пицц&nbsp;&mdash; средняя пицца в&nbsp;подарок
                        </div>
                    </a>
                    <a href="#" className="special-list__item">
                        <div className="special-list__img">
                            <img
                                src="/img/jpg/Event%202.jpg"
                                alt="Закажи 2 пиццы – 3-я в подарок"
                                className="special-list__img-item"
                            />
                        </div>
                        <div className="special-list__title">Напиток в&nbsp;подарок</div>
                        <div className="special-list__about">
                            Скидка на&nbsp;заказ от&nbsp;3&nbsp;000 рублей + напиток в&nbsp;подарок
                        </div>
                    </a>
                    <a href="#" className="special-list__item">
                        <div className="special-list__img">
                            <img
                                src="/img/jpg/Event%203.jpg"
                                alt="Закажи 2 пиццы – 3-я в подарок"
                                className="special-list__img-item"
                            />
                        </div>
                        <div className="special-list__title">25% при первом заказе</div>
                        <div className="special-list__about">Скидка новым клиентам!</div>
                    </a>
                </div>
            )}
        </div>
    );
};

export default SaleSlidet;
