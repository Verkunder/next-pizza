import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

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

const Basket = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-content">
                <h3 className="modal__title">Ваш заказ</h3>
                <div className="modal__close" data-dismiss="modal" />
                <div className="wrap__basket">
                    <div className="basket-modal">
                        <div className="basket-modal__item">
                            <div className="basket-modal__wrap--img">
                                <div className="basket-modal__wrap--icons--type">
                                    <svg
                                        width="24"
                                        height="21"
                                        viewBox="0 0 24 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.858
                                            1.28576C22.3781
                                            0.818415 21.6107
                                            0.82788 21.1434
                                            1.30788C20.676
                                            1.78783 20.6855
                                            2.5552 21.1655
                                            3.02255C21.1694
                                            3.02651 21.5666
                                            3.48753 21.5287
                                            4.36935C21.5119
                                            4.75881 21.396
                                            5.33268 21.0244
                                            6.07379C21.4128
                                            6.28935 21.7727
                                            6.54833 22.0884
                                            6.85772C22.3742
                                            7.13785 22.6204
                                            7.45652 22.8318
                                            7.80237C23.5185
                                            6.66002 23.9055
                                            5.5469 23.9515
                                            4.47279C24.0367
                                            2.49363 22.9788
                                            1.4034 22.858
                                            1.28576Z"
                                            fill="#C5CBD1"
                                        />
                                        <path
                                            d="M18.2745
                                            7.00061C16.6616
                                            7.00061 14.9485
                                            7.80584 14.0138
                                            9.10841C9.22482
                                            15.788 4.37928
                                            16.1306 1.83099
                                            16.1306C1.53961
                                            16.1306 1.27831
                                            16.1259 1.05096
                                            16.1259C0.16441
                                            16.1259 -0.214519
                                            16.1937 0.120998
                                            16.8561C0.915895
                                            18.4271 4.54192
                                            20.3502 8.99593
                                            20.3502C12.5832
                                            20.3502 16.7073
                                            19.1021 20.3191
                                            15.4169C22.1411
                                            13.5585 22.8137
                                            9.83314 20.9561
                                            8.01185C20.2425
                                            7.31247 19.2778
                                            7.00061 18.2745
                                            7.00061Z"
                                            fill="#C5CBD1"
                                        />
                                        <path
                                            d="M3.10876
                                            12.9261C3.01774
                                            11.7465 3.23779
                                            9.07042 6.75387
                                            7.56354C6.75387
                                            7.56354 5.44855
                                            10.7206 7.21653
                                            12.3179C8.49925
                                            11.3168 9.40155
                                            9.68167 9.49412
                                            8.10033C9.76015
                                            3.53888 6.57544
                                            1.13816 4.50781
                                            0.0684926C4.29631
                                            -0.04127 4.0381
                                            -0.00418346 3.86687
                                            0.161644C3.69476 0.32665
                                            3.64816 0.583165 3.74923
                                            0.79873C4.54809 2.49452
                                            5.0857 5.52832 1.66823
                                            9.05946C0.624837 10.1369
                                            1.47503 12.119 3.10876
                                            12.9261Z"
                                            fill="#C5CBD1"
                                        />
                                    </svg>
                                </div>
                                <img
                                    src="/img/png/Pizza01.png"
                                    alt="Итальянская пицца"
                                    className="basket-modal__img--pizza"
                                />
                            </div>
                            <div className="basket-modal__wrap--text">
                                <div className="basket-modal__title--pizza">Итальянская</div>
                                <div className="basket-modal__size--pizza">30 см</div>
                            </div>
                            <div className="basket-modal__wrap--count">
                                <div className="basket-modal__minus" />
                                <input type="text" className="basket-modal__count" value="1" />
                                <div className="basket-modal__plus" />
                            </div>
                            <div className="basket-modal__wrap--price">
                                <div className="basket-modal__price">699 руб</div>
                                <div className="basket-modal__remove--item" />
                            </div>
                        </div>
                        <div className="basket-modal__item">
                            <div className="basket-modal__wrap--img">
                                <div className="basket-modal__wrap--icons--type">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.7398
                                            4.26013C18.4571
                                            2.97739 14.163
                                            -1.10111 12.7793
                                            0.282735C11.3955
                                            1.66648 15.4739
                                            5.96052 16.7568
                                            7.24325C18.0395
                                            8.52608 22.3335
                                            12.6045 23.7173
                                            11.2207C25.101
                                            9.83698 21.0226
                                            5.54295 19.7398
                                            4.26013Z"
                                            fill="#C5CBD1"
                                        />
                                        <path
                                            d="M8.27704
                                            4.78508C5.3444
                                            7.71768 4.33743
                                            11.9835 5.64881
                                            15.9179C5.68331
                                            16.0212 5.74157
                                            16.1154 5.81873
                                            16.1926L7.80745
                                            18.1814C7.8847
                                            18.2585 7.97887
                                            18.3168 8.08228
                                            18.3513C12.0166
                                            19.6627 16.2824
                                            18.6557 19.215
                                            15.723L22.1482
                                            12.79C20.5176
                                            12.3823 18.4064
                                            10.8816 15.7624
                                            8.23757C13.1185
                                            5.59363 11.6177
                                            3.48257 11.2101
                                            1.85193L8.27704
                                            4.78508Z"
                                            fill="#C5CBD1"
                                        />
                                        <path
                                            d="M4.42298
                                            16.5939L3.22397
                                            17.8125H2.10914C0.945891
                                            17.8125 0 18.7387
                                            0 19.9021C0
                                            21.0256 0.883219
                                            21.9476 1.99162
                                            22.0083C2.02031
                                            22.5274 2.23589
                                            23.0119 2.60634
                                            23.3823C3.0045
                                            23.7805 3.5347
                                            24 4.09791
                                            24C5.26125 24
                                            6.1875 23.0542
                                            6.1875
                                            21.8908V20.776L7.40611
                                            19.577C7.18903
                                            19.4736 6.9832
                                            19.3459 6.813
                                            19.1757L4.82428
                                            17.187C4.65412
                                            17.0168 4.52639
                                            16.811 4.42298
                                            16.5939V16.5939Z"
                                            fill="#C5CBD1"
                                        />
                                    </svg>
                                </div>
                                <img
                                    src="/img/png/Pizza02.png"
                                    alt="Маргарита"
                                    className="basket-modal__img--pizza"
                                />
                            </div>
                            <div className="basket-modal__wrap--text">
                                <div className="basket-modal__title--pizza">Маргарита</div>
                                <div className="basket-modal__size--pizza">40 см</div>
                            </div>
                            <div className="basket-modal__wrap--count">
                                <div className="basket-modal__minus" />
                                <input type="text" className="basket-modal__count" value="1" />
                                <div className="basket-modal__plus" />
                            </div>
                            <div className="basket-modal__wrap--price">
                                <div className="basket-modal__price">479 руб</div>
                                <div className="basket-modal__remove--item" />
                            </div>
                        </div>
                        <div className="basket-modal__item">
                            <div className="basket-modal__wrap--img">
                                <div className="basket-modal__wrap--icons--type">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.7398
                                            4.26013C18.4571
                                            2.97739 14.163
                                            -1.10111 12.7793
                                            0.282735C11.3955
                                            1.66648 15.4739
                                            5.96052 16.7568
                                            7.24325C18.0395
                                            8.52608 22.3335
                                            12.6045 23.7173
                                            11.2207C25.101
                                            9.83698 21.0226
                                            5.54295 19.7398
                                            4.26013Z"
                                            fill="#C5CBD1"
                                        />
                                        <path
                                            d="M8.27704
                                            4.78508C5.3444
                                            7.71768 4.33743
                                            11.9835 5.64881
                                            15.9179C5.68331
                                            16.0212 5.74157
                                            16.1154 5.81873
                                            16.1926L7.80745
                                            18.1814C7.8847
                                            18.2585 7.97887
                                            18.3168 8.08228
                                            18.3513C12.0166
                                            19.6627 16.2824
                                            18.6557 19.215
                                            15.723L22.1482
                                            12.79C20.5176
                                            12.3823 18.4064
                                            10.8816 15.7624
                                            8.23757C13.1185
                                            5.59363 11.6177
                                            3.48257 11.2101
                                            1.85193L8.27704
                                            4.78508Z"
                                            fill="#C5CBD1"
                                        />
                                        <path
                                            d="M4.42298
                                            16.5939L3.22397
                                            17.8125H2.10914C0.945891
                                            17.8125 0 18.7387
                                            0 19.9021C0
                                            21.0256
                                            0.883219
                                            21.9476
                                            1.99162
                                            22.0083C2.02031
                                            22.5274 2.23589
                                            23.0119 2.60634
                                            23.3823C3.0045
                                            23.7805 3.5347
                                            24 4.09791
                                            24C5.26125
                                            24 6.1875
                                            23.0542
                                            6.1875
                                            21.8908V20.776L7.40611
                                            19.577C7.18903
                                            19.4736 6.9832
                                            19.3459 6.813
                                            19.1757L4.82428
                                            17.187C4.65412
                                            17.0168 4.52639
                                            16.811 4.42298
                                            16.5939V16.5939Z"
                                            fill="#C5CBD1"
                                        />
                                    </svg>
                                </div>
                                <img
                                    src="/img/png/Pizza03.png"
                                    alt="Барбекю"
                                    className="basket-modal__img--pizza"
                                />
                            </div>
                            <div className="basket-modal__wrap--text">
                                <div className="basket-modal__title--pizza">Барбекю</div>
                                <div className="basket-modal__size--pizza">30 см</div>
                            </div>
                            <div className="basket-modal__wrap--count">
                                <div className="basket-modal__minus" />
                                <input type="text" className="basket-modal__count" value="1" />
                                <div className="basket-modal__plus" />
                            </div>
                            <div className="basket-modal__wrap--price">
                                <div className="basket-modal__price">699 руб</div>
                                <div className="basket-modal__remove--item" />
                            </div>
                        </div>
                    </div>
                    <div className="sum-basket">
                        <div className="sum-basket__text">Сумма заказа:</div>
                        <div className="sum-basket__sum">1 877 руб</div>
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
                            />
                            <label htmlFor="paymentSite" className="buy-form__radio--label">
                                Оплата картой онлайн на&nbsp;сайте
                            </label>
                        </div>
                        <label htmlFor="" className="error">
                            Выберите способ оплаты!
                        </label>
                        <div type="submit" className="buy-form__btn--buy">
                            Оформить заказ
                        </div>
                        <div className="buy-form__info smallText">
                            Нажимая кнопку &laquo;Оформить заказ&raquo; вы&nbsp;соглашаетесь
                            с&nbsp;политикой конфиденциальности
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default Basket;
