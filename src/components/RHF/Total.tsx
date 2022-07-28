import React from 'react';
import { Control, useWatch } from 'react-hook-form';

import { FormValues } from './FieldArray';

const Total = ({ control }: { control: Control<FormValues> }) => {
    const formValues = useWatch({
        name: 'cart',
        control,
    });
    const total = formValues.reduce(
        (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
        0
    );
    return <p>Total Amount: {total}</p>;
};

export default Total;
