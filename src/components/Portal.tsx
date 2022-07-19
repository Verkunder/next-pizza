import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';

const Portal = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const { basket } = useStore();
    useEffect(() => {
        setMounted(true);

        setTimeout(() => {
            setMounted(false);
        }, 3000);
    }, [basket.length]);

    return mounted ? createPortal(children, document.querySelector('.header')) : null;
};

export default observer(Portal);
