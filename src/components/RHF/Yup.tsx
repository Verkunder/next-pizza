import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface IFormInputs {
    firstName: string;
    age: number;
}

const schema = yup
    .object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    })
    .required();

const Yup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="buy-form__input" {...register('firstName')} />
            <p>{errors.firstName?.message}</p>

            <input className="buy-form__input" {...register('age')} />
            <div className="special-list__about">{errors.age?.message}</div>

            <button className="catalog-pizza-card__buy" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default Yup;
