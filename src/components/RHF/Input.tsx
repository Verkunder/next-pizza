import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

export type FormValues = {
    FirstName: string;
};

const Input = (props: UseControllerProps<FormValues>) => {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input className="buy-form__input" {...field} placeholder={props.name} />
            <div className="special-list__about">{fieldState.isTouched && 'Прикоснулся'}</div>
            <div className="special-list__about">{fieldState.isDirty && 'Заполнено'}</div>
            <div className="special-list__about">
                {fieldState.invalid ? 'Не валидно' : 'Валидно'}
            </div>
        </div>
    );
};

export default Input;
