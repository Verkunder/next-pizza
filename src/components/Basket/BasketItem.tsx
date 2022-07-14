import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';

interface IBasketItemProps {
    item: {
        id: number;
        name: string;
        description: string;
        size: number;
        price: number;
        icon: Array<string>;
        img: string;
        sort: string;
        quantity: number;
    };
}

const BasketItem: FC<IBasketItemProps> = observer(({ item }) => {
    const { id, name, description, size, price, icon, img, sort, quantity } = item;

    const { deleteItem, plusItemQuantity, minusItemQuantity } = useStore();
    return (
        <div className="basket-modal__item">
            <div className="basket-modal__wrap--img">
                <div className="basket-modal__wrap--icons--type">
                    {icon.map((image, idx) => (
                        <img
                            width="16"
                            height="16"
                            src={`/img/svg/${image}`}
                            alt="icon"
                            key={idx}
                        />
                    ))}
                </div>
                <img src={`/img/png/${img}`} alt={name} className="basket-modal__img--pizza" />
            </div>
            <div className="basket-modal__wrap--text">
                <div className="basket-modal__title--pizza">{name}</div>
                <div className="basket-modal__size--pizza">{size} см</div>
            </div>
            <div className="basket-modal__wrap--count">
                <div
                    role="button"
                    tabIndex={0}
                    className={
                        quantity === 1 ? 'basket-modal__minus disabled' : 'basket-modal__minus'
                    }
                    onKeyDown={null}
                    aria-label="Minus"
                    onClick={() => minusItemQuantity(item)}
                />
                <input type="text" className="basket-modal__count" value={quantity} />
                <div
                    role="button"
                    tabIndex={0}
                    aria-label="Plus"
                    className="basket-modal__plus"
                    onClick={() => plusItemQuantity(item)}
                    onKeyDown={null}
                />
            </div>
            <div className="basket-modal__wrap--price">
                <div className="basket-modal__price">{price * quantity} руб</div>
                <button
                    type="button"
                    tabIndex={0}
                    aria-label="Delete"
                    onClick={() => deleteItem(id)}
                    className="basket-modal__remove--item"
                />
            </div>
        </div>
    );
});

export default BasketItem;
