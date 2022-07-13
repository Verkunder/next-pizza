import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';

interface IBasketItemProps {
    item: {
        id?: number;
        name?: string;
        description?: string;
        size?: number;
        price?: number;
        icon?: Array<string>;
        img?: string;
        sort?: string;
    };
}

const BasketItem: FC<IBasketItemProps> = observer(({ item }) => {
    const { id, name, description, size, price, icon, img, sort } = item;
    const { deleteItem } = useStore();
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
                <div className="basket-modal__minus" />
                <input type="text" className="basket-modal__count" value="1" />
                <div className="basket-modal__plus" />
            </div>
            <div className="basket-modal__wrap--price">
                <div className="basket-modal__price">{price} руб</div>
                <button
                    type="button"
                    aria-label="Delete"
                    onClick={() => deleteItem(id)}
                    className="basket-modal__remove--item"
                />
            </div>
        </div>
    );
});

export default BasketItem;
