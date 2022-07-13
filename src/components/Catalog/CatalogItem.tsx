import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';

interface CatalogItemProps {
    catalogItem: {
        id: number;
        name: string;
        description: string;
        size: number;
        price: number;
        icon: Array<string>;
        img: string;
        sort: string;
    };
}

const CatalogItem: FC<CatalogItemProps> = observer(({ catalogItem }) => {
    const { addBasket } = useStore();

    const { id, name, description, size, price, icon, img, sort } = catalogItem;

    const [activeSize, setActiveSize] = useState<number>(size);

    const [imageSize, setImageSize] = useState<string>('');

    useEffect(() => {
        if (activeSize === 20) setImageSize('small');
        if (activeSize === 30) setImageSize('middle');
        if (activeSize === 40) setImageSize('big');
    }, [activeSize]);

    const itemSize = [20, 30, 40];

    return (
        <div className="catalog-pizza-card__block hot">
            <div className="catalog-pizza-card__block-item">
                <div className="catalog-pizza-card__wrap--left--side--mobile">
                    <div className="catalog-pizza-card__wrap--icon">
                        {icon.map((item, idx) => (
                            <img
                                width="24px"
                                height="24px"
                                style={{ margin: '5px 0' }}
                                alt="Pizza"
                                src={`/img/svg/${item}`}
                                key={idx}
                            />
                        ))}
                    </div>
                    <div className="catalog-pizza-card__wrap--img">
                        <img
                            src={`/img/png/${img}`}
                            alt={name}
                            className={`catalog-pizza-card__img ${imageSize}`}
                        />
                    </div>
                </div>
                <div className="catalog-pizza-card__wrap--right--side--mobile">
                    <div className="catalog-pizza-card__wrap--content">
                        <h4 className="catalog-pizza-card__title">{name}</h4>
                        <div className="catalog-pizza-card__recept">{description}</div>
                    </div>
                    <div className="catalog-pizza-card__wrap--content">
                        <div className="catalog-pizza-card__title--size">Размер, см:</div>
                        <div className="catalog-pizza-card__size--list">
                            {itemSize.map((item, idx) => (
                                <div className="catalog-pizza-card__size--item" key={idx}>
                                    <button
                                        type="button"
                                        className={
                                            activeSize === item
                                                ? 'catalog-pizza-card__size--btn active'
                                                : 'catalog-pizza-card__size--btn'
                                        }
                                        onClick={() => setActiveSize(item)}
                                    >
                                        {item}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="catalog-pizza-card__price">от 699 руб.</div>
                        <button
                            className="catalog-pizza-card__buy"
                            type="button"
                            onClick={() =>
                                addBasket(id, name, description, activeSize, price, icon, img, sort)
                            }
                        >
                            Заказать
                        </button>
                        <button className="catalog-pizza-card__buy mobileBuy" type="button">
                            от 699 руб.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CatalogItem;
