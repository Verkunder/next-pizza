import { createContext } from 'react';
import { IStoreProps } from '@/domain/core/Store';

const GlobalStoreContext = createContext<IStoreProps>(null);

export default GlobalStoreContext;
