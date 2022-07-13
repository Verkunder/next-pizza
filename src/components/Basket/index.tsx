import React from 'react';
import Modal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import BasketItem from '@/components/Basket/BasketItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Index = observer(() => {
    const { isOpen, toggleModal, basket, totalSum } = useStore();

    return (
        <Modal
            open={isOpen}
            onClose={toggleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-content">
                <h3 className="modal__title">Ваш заказ</h3>
                <button
                    type="button"
                    aria-label="Close"
                    onKeyDown={() => ''}
                    className="modal__close"
                    data-dismiss="modal"
                    onClick={toggleModal}
                />
                <div className="wrap__basket">
                    <div className="basket-modal">
                        {basket.length ? (
                            basket.map((item, id) => <BasketItem item={item} key={id} />)
                        ) : (
                            <h3 className="sum-basket__text">Ваша корзина пуста</h3>
                        )}
                    </div>
                    {basket.length ? (
                        <>
                            <div className="sum-basket">
                                <div className="sum-basket__text">Сумма заказа:</div>
                                <div className="sum-basket__sum">{totalSum} руб</div>
                            </div>
                            <form id="buy" className="buy-form" autoComplete="off" name="buy">
                                <span className="buy-form__title">Контакты</span>
                                <div className="buy-form__wrap buy-form__wrap--two--сolumn">
                                    <div className="buy-form__wrap--input">
                                        <input
                                            type="text"
                                            className="buy-form__input"
                                            name="firstname"
                                            id="firstname"
                                        />
                                        <label className="buy-form__label" htmlFor="firstname">
                                            Ваше имя
                                        </label>
                                    </div>
                                    <div className="buy-form__wrap--input">
                                        <input
                                            type="text"
                                            className="buy-form__input"
                                            name="phone"
                                            id="phone"
                                        />
                                        <label className="buy-form__label" htmlFor="phone">
                                            Телефон
                                        </label>
                                    </div>
                                </div>
                                <div className="buy-form__wrap">
                                    <div className="buy-form__wrap--input">
                                        <input
                                            type="text"
                                            className="buy-form__input"
                                            name="address"
                                            id="address"
                                        />
                                        <label className="buy-form__label" htmlFor="address">
                                            Адрес доставки
                                        </label>
                                    </div>
                                </div>
                                <div className="buy-form__title">Способ оплаты</div>
                                <div className="buy-from__radio">
                                    <input
                                        type="radio"
                                        className="buy-form__radio"
                                        name="payment"
                                        id="paymentСourier"
                                    />
                                    <label
                                        htmlFor="paymentСourier"
                                        className="buy-form__radio--label"
                                    >
                                        Оплата наличными или картой курьеру
                                    </label>
                                </div>
                                <div className="buy-from__radio">
                                    <input
                                        type="radio"
                                        className="buy-form__radio"
                                        name="payment"
                                        id="paymentSite"
                                    />
                                    <label htmlFor="paymentSite" className="buy-form__radio--label">
                                        Оплата картой онлайн на&nbsp;сайте
                                    </label>
                                </div>
                                <label htmlFor="" className="error">
                                    Выберите способ оплаты!
                                </label>
                                <div className="buy-form__btn--buy">Оформить заказ</div>
                                <div className="buy-form__info smallText">
                                    Нажимая кнопку &laquo;Оформить заказ&raquo; вы&nbsp;соглашаетесь
                                    с&nbsp;политикой конфиденциальности
                                </div>
                            </form>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </Modal>
    );
});

export default Index;
