import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    phone: string;
    adress: string;
    radio: string;
    online: string;
};

const OrderForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const name = watch('name');
    const phone = watch('phone');
    const adress = watch('adress');
    const radio = watch('radio');

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
                <div className={name ? 'buy-form__wrap--input complete' : 'buy-form__wrap--input'}>
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
                <div className={phone ? 'buy-form__wrap--input complete' : 'buy-form__wrap--input'}>
                    <input
                        type="text"
                        className={errors.phone ? 'buy-form__input-error' : 'buy-form__input'}
                        name="phone"
                        id="phone"
                        {...register('phone', {
                            required: true,
                            maxLength: 18,
                            /* pattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i, */
                        })}
                    />
                    <label className="buy-form__label" htmlFor="phone">
                        Телефон
                    </label>
                </div>
            </div>
            <div className="buy-form__wrap">
                <div
                    className={adress ? 'buy-form__wrap--input complete' : 'buy-form__wrap--input'}
                >
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
                    {...register('radio', { required: true })}
                    value="paymentСourier"
                />
                <label htmlFor="paymentСourier" className="buy-form__radio--label">
                    Оплата наличными или картой курьеру
                </label>
            </div>
            <div className="buy-from__radio">
                <input
                    type="radio"
                    className="buy-form__radio"
                    name="payment"
                    id="paymentSite"
                    {...register('radio', { required: true })}
                    value="paymentSite"
                />
                <label htmlFor="paymentSite" className="buy-form__radio--label">
                    Оплата картой онлайн на&nbsp;сайте
                </label>
            </div>
            {radio === 'paymentSite' ? (
                <>
                    <div className="buy-from__radio">
                        <input
                            type="radio"
                            className="buy-form__radio"
                            name="visa"
                            id="visa"
                            {...register('online', { required: true })}
                            value="visa"
                        />
                        <label htmlFor="visa" className="buy-form__radio--label">
                            Visa
                        </label>
                    </div>
                    <div className="buy-from__radio">
                        <input
                            type="radio"
                            className="buy-form__radio"
                            name="master"
                            id="master"
                            {...register('online', { required: true })}
                            value="master"
                        />
                        <label htmlFor="master" className="buy-form__radio--label">
                            Mastercard
                        </label>
                    </div>
                    {errors.online && (
                        <label htmlFor="" className="error">
                            Выберите способ оплаты!
                        </label>
                    )}
                </>
            ) : (
                ''
            )}
            {errors.radio && (
                <label htmlFor="" className="error">
                    Выберите способ оплаты!
                </label>
            )}

            <button className="buy-form__btn--buy" type="submit" tabIndex={0}>
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
