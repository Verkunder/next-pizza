import React from 'react';
import Modal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import BasketItem from '@/components/Basket/BasketItem';
import OrderForm from '@/components/Basket/OrderForm';

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
                            <OrderForm />
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
