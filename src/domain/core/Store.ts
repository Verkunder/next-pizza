import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export interface IStoreProps {
    isOpen: boolean;
    toggleModal: () => void;
}

export default class Store implements IStoreProps {
    isOpen = false;

    toggleModal = () => {
        this.isOpen = !this.isOpen;
    };

    constructor() {
        makeAutoObservable(this);
    }

    public hydrate: (data) => void;
}
