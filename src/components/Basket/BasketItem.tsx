import React, { FC, useState } from 'react';
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
        quantity?: number;
    };
}

const BasketItem: FC<IBasketItemProps> = observer(({ item }) => {
    const { id, name, description, size, price, icon, img, sort, quantity } = item;

    const [itemQuantity, setitemQuantity] = useState<number>(quantity);

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
                <div
                    role="button"
                    tabIndex={0}
                    className={
                        itemQuantity === 1 ? 'basket-modal__minus disabled' : 'basket-modal__minus'
                    }
                    onKeyDown={null}
                    aria-label="Minus"
                    onClick={() =>
                        itemQuantity !== 1 ? setitemQuantity(itemQuantity - 1) : setitemQuantity(1)
                    }
                />
                <input type="text" className="basket-modal__count" value={itemQuantity} />
                <div
                    role="button"
                    tabIndex={0}
                    aria-label="Plus"
                    className="basket-modal__plus"
                    onClick={() => setitemQuantity(itemQuantity + 1)}
                    onKeyDown={null}
                />
            </div>
            <div className="basket-modal__wrap--price">
                <div className="basket-modal__price">{price * itemQuantity} руб</div>
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
