import React from 'react';

const Basket = () => (
    <div className="basket" data-toggle="modal" data-target=".bd-example-modal-lg">
        <div className="basket__wrap--icon">
            <img src="/img/svg/basket-icon.svg" alt="Корзина" className="basket__icon" />
            <div className="basket__count--icon">3</div>
        </div>
        <div className="basket__text">
            <div className="basket__text--order">Ваш заказ</div>
            <div className="basket__items--text smallText">Итальянская и&nbsp;ещё 2&nbsp;пиццы</div>
        </div>
    </div>
);

export default Basket;
