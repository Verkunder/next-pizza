import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
    ReactDatepicker: string;
};

const Controllers = () => {
    const { handleSubmit, control } = useForm<FormValues>();
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <Controller
                control={control}
                name="TextField"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <>
                        <TextField onChange={onChange} onBlur={onBlur} />
                    </>
                )}
            />

            <button className="catalog-pizza-card__buy" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default Controllers;
