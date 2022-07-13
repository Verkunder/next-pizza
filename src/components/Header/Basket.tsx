import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';

const Basket = observer(() => {
    const { toggleModal, basket } = useStore();
    return (
        <a
            role="button"
            tabIndex={0}
            className="basket"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            onClick={toggleModal}
            onKeyDown={() => ''}
        >
            <div className="basket__wrap--icon">
                <img src="/img/svg/basket-icon.svg" alt="Корзина" className="basket__icon" />
                {basket.length ? <div className="basket__count--icon">{basket.length}</div> : ''}
            </div>
            <div className="basket__text">
                <div className="basket__text--order">Ваш заказ</div>
                <div className="basket__items--text smallText">
                    Итальянская и&nbsp;ещё 2&nbsp;пиццы
                </div>
            </div>
        </a>
    );
});

export default Basket;
