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
    }>;
    addBasket: (
        id: number,
        name: string,
        description: string,
        size: number,
        price: number,
        icon: Array<string>,
        img: string,
        sort: string
    ) => void;
}

export default class Store implements IStoreProps {
    isOpen = false;

    basket = [];

    addBasket = (
        id: number,
        name: string,
        description: string,
        size: number,
        price: number,
        icon: Array<string>,
        img: string,
        sort: string
    ) => {
        this.basket.push({ id, name, description, size, price, icon, img, sort });
    };

    toggleModal = () => {
        this.isOpen = !this.isOpen;
    };

    constructor() {
        makeAutoObservable(this);
    }

    public hydrate: (data) => void;
}
