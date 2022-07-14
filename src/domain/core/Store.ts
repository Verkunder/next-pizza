import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export interface IStoreProps {
    isOpen: boolean;
    toggleModal: () => void;
    basket: Array<{
        id?: number;
        name?: string;
        description?: string;
        size?: number;
        price?: number;
        icon?: Array<string>;
        img?: string;
        sort?: string;
        quantity?: number;
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
}

export default class Store implements IStoreProps {
    isOpen = false;

    basket = [];

    get totalSum() {
        return this.basket.reduce((acc, num) => Number(acc) + Number(num.price), 0) as number;
    }

    deleteItem = idx => {
        this.basket = this.basket.filter(({ id }) => id !== idx);
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
        this.basket.push({ id, name, description, size, price, icon, img, sort, quantity });
    };

    toggleModal = () => {
        this.isOpen = !this.isOpen;
    };

    constructor() {
        makeAutoObservable(this);
    }

    public hydrate: (data) => void;
}
