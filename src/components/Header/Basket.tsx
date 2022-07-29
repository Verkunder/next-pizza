import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import Portal from '@/components/Portal';
import Push from '@/components/Push';

const Basket = observer(() => {
    const { toggleModal, basket, action } = useStore();

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
                {basket.length > 0 ? (
                    <div className="basket__items--text smallText">
                        {basket.length > 1
                            ? `${basket[0].name} и ещё ${basket.length - 1}`
                            : basket[0].name}
                    </div>
                ) : (
                    <div className="basket__items--text smallText">Тут пока ничего нет</div>
                )}
                {/*{action === 'add' && (
                    <Portal>
                        <Push
                            type={'Успешно'}
                            message={'Товар добавлен в корзину'}
                            severityType={'success'}
                        />
                    </Portal>
                )}
                {action === 'delete' && (
                    <Portal>
                        <Push
                            type={'Успешно'}
                            message={'Товар удален из корзины'}
                            severityType={'warning'}
                        />
                    </Portal>
                )} */}
            </div>
        </a>
    );
});

export default Basket;
