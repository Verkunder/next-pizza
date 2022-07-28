import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

const FormStates = () => {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            firstName: 'firstName',
        },
    });
    const { dirtyFields } = useFormState({
        control,
    });
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('firstName')}
                className="buy-form__input"
                placeholder="First Name"
            />
            {dirtyFields.firstName && <p>Field is dirty.</p>}

            <button className="catalog-pizza-card__buy" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default FormStates;
