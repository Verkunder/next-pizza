import React, { useState } from 'react';
import Push from '@/components/Push';
import Portal from '@/components/Portal';

const WithMessage = Component => {
    const [isShow, setIsShow] = useState(false);
    const openHandler = () => {
        setIsShow(!isShow);
    };

    return (
        <div onClick={() => openHandler()}>
            {isShow && (
                <Portal>
                    <Push
                        type={'Успешно'}
                        message={'Товар добавлен в корзину'}
                        severityType={'success'}
                    />
                </Portal>
            )}
            <Component />
        </div>
    );
};

export default WithMessage;
