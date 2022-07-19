import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    phone: string;
    adress: string;
};

const OrderForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <form
            id="buy"
            className="buy-form"
            autoComplete="off"
            name="buy"
            onSubmit={handleSubmit(onSubmit)}
        >
            <span className="buy-form__title">Контакты</span>
            <div className="buy-form__wrap buy-form__wrap--two--сolumn">
                <div className="buy-form__wrap--input">
                    <input
                        type="text"
                        className={errors.name ? 'buy-form__input-error' : 'buy-form__input'}
                        name="firstname"
                        id="firstname"
                        {...register('name', { required: true, pattern: /^[А-Яа-я]+$/i })}
                    />
                    <label className="buy-form__label" htmlFor="firstname">
                        Ваше имя
                    </label>
                </div>
                <div className="buy-form__wrap--input">
                    <input
                        type="text"
                        className={errors.phone ? 'buy-form__input-error' : 'buy-form__input'}
                        name="phone"
                        id="phone"
                        {...register('phone', { required: true, maxLength: 18 })}
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
                        className={errors.adress ? 'buy-form__input-error' : 'buy-form__input'}
                        name="address"
                        id="address"
                        {...register('adress', { required: true })}
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
                <label htmlFor="paymentСourier" className="buy-form__radio--label">
                    Оплата наличными или картой курьеру
                </label>
            </div>
            <div className="buy-from__radio">
                <input type="radio" className="buy-form__radio" name="payment" id="paymentSite" />
                <label htmlFor="paymentSite" className="buy-form__radio--label">
                    Оплата картой онлайн на&nbsp;сайте
                </label>
            </div>
            <label htmlFor="" className="error">
                Выберите способ оплаты!
            </label>
            <button className="buy-form__btn--buy" type="button" tabIndex={0}>
                Оформить заказ
            </button>
            <div className="buy-form__info smallText">
                Нажимая кнопку &laquo;Оформить заказ&raquo; вы&nbsp;соглашаетесь с&nbsp;политикой
                конфиденциальности
            </div>
        </form>
    );
};

export default OrderForm;
