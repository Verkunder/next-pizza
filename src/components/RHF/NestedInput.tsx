import React from 'react';
import { useFormContext } from 'react-hook-form';

const NestedInput = () => {
    const { register } = useFormContext();
    return <input className="buy-form__input" {...register('test')} />;
};

export default NestedInput;
