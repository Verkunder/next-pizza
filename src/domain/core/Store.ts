import { makeAutoObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
import Portal from '@/components/Portal';

enableStaticRendering(typeof window === 'undefined');

export interface IStoreProps {
    isOpen: boolean;
    action: string;
    toggleModal: () => void;
    basket: Array<{
        id: number;
        name: string;
        description: string;
        size: number;
        price: number;
        icon: Array<string>;
        img: string;
        sort: string;
        quantity: number;
    }>;
    addBasket: (
        id: number,
        name: string,
        description: string,
        size: number,
        price: number,
        icon: Array<string>,
        img: string,
        sort: string,
        quantity: number
    ) => void;
    totalSum: number;
    deleteItem: (idx: number) => void;
    plusItemQuantity: (item: {
        id: number;
        name: string;
        description: string;
        size: number;
        price: number;
        icon: Array<string>;
        img: string;
        sort: string;
        quantity: number;
    }) => void;
    minusItemQuantity: (item: {
        id: number;
        name: string;
        description: string;
        size: number;
        price: number;
        icon: Array<string>;
        img: string;
        sort: string;
        quantity: number;
    }) => void;
}

export default class Store implements IStoreProps {
    isOpen = false;

    basket = [];

    action = '';

    get totalSum() {
        return this.basket.reduce(
            (acc, num) => Number(acc) + Number(num.price * num.quantity),
            0
        ) as number;
    }

    deleteItem = idx => {
        this.basket = this.basket.filter(({ id }) => id !== idx);
        this.action = 'delete';
    };

    addBasket = (
        id: number,
        name: string,
        description: string,
        size: number,
        price: number,
        icon: Array<string>,
        img: string,
        sort: string,
        quantity: number
    ) => {
        if (this.basket.find(item => item.id === id)) {
            this.basket = this.basket.filter(item => item.id !== id);
            this.basket.push({
                id,
                name,
                description,
                size,
                price,
                icon,
                img,
                sort,
                quantity: quantity + 1,
            });
        } else {
            this.basket.push({ id, name, description, size, price, icon, img, sort, quantity });
        }
        this.basket.sort((a, b) => {
            if (a.id > b.id) {
                return -1;
            }
            return 1;
        });
        this.action = 'add';
    };

    plusItemQuantity = item => {
        this.basket = this.basket.filter(({ id }) => id !== item.id);
        this.basket.push({ ...item, quantity: Number(item.quantity) + 1 });
        this.basket.sort((a, b) => {
            if (a.id > b.id) {
                return -1;
            }
            return 1;
        });
    };

    minusItemQuantity = item => {
        if (item.quantity !== 1) {
            this.basket = this.basket.filter(({ id }) => id !== item.id);
            this.basket.push({ ...item, quantity: item.quantity - 1 });
            this.basket.sort((a, b) => {
                if (a.id > b.id) {
                    return -1;
                }
                return 1;
            });
        }
    };

    toggleModal = () => {
        this.isOpen = !this.isOpen;
    };

    constructor() {
        makeAutoObservable(this, {
            basket: observable,
        });
    }

    public hydrate: (data) => void;
}
