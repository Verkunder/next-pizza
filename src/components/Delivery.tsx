import React from 'react';

const Delivery = () => (
    <div className="delivery">
        <div className="wrapper">
            <h2>Доставка и оплата</h2>
            <div className="delivery__steps">
                <div className="step">
                    <div className="step-img">
                        <img src="/img/svg/icon-order.svg" alt="Заказ" />
                    </div>
                    <div className="step-text">
                        <div className="step-title">Заказ</div>
                        <div className="step-offer">
                            После оформления заказа мы&nbsp;свяжемся с&nbsp;вами для уточнения
                            деталей.
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="step-img">
                        <img src="/img/svg/icon-delivery.svg" alt="Доставка" />
                    </div>
                    <div className="step-text">
                        <div className="step-title">Доставка курьером</div>
                        <div className="step-offer">
                            Мы&nbsp;доставим вашу пиццу горячей. Бесплатная доставка по&nbsp;городу.
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="step-img">
                        <img src="/img/svg/icon-pay.svg" alt="Оплата" />
                    </div>
                    <div className="step-text">
                        <div className="step-title">Оплата</div>
                        <div className="step-offer">
                            Оплатить можно наличными или картой курьеру. И&nbsp;золотом тоже можно.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Delivery;
