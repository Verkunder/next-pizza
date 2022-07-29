import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import Total from './Total';

export type FormValues = {
    cart: {
        name: string;
        price: number;
        quantity: number;
    }[];
};

const FieldArray = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            cart: [{ name: 'test', quantity: 1, price: 23 }],
        },
        mode: 'onBlur',
    });
    const { fields, append, remove } = useFieldArray({
        name: 'cart',
        control,
    });
    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <section className="section" key={field.id}>
                            <input
                                placeholder="name"
                                {...register(`cart.${index}.name` as const, {
                                    required: true,
                                })}
                                className={
                                    errors?.cart?.[index]?.name
                                        ? 'buy-form__input-error'
                                        : 'buy-form__input'
                                }
                            />
                            <input
                                placeholder="quantity"
                                type="number"
                                {...register(`cart.${index}.quantity` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                                className={
                                    errors?.cart?.[index]?.quantity
                                        ? 'buy-form__input-error'
                                        : 'buy-form__input'
                                }
                            />
                            <input
                                placeholder="value"
                                type="number"
                                {...register(`cart.${index}.price` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                                className={
                                    errors?.cart?.[index]?.price
                                        ? 'buy-form__input-error'
                                        : 'buy-form__input'
                                }
                            />
                            <button
                                type="button"
                                className="catalog-pizza-card__buy"
                                onClick={() => remove(index)}
                            >
                                Удалить
                            </button>
                        </section>
                    </div>
                ))}
                <Total control={control} />
                <button
                    type="button"
                    className="catalog-pizza-card__buy"
                    onClick={() =>
                        append({
                            name: '',
                            quantity: 0,
                            price: 0,
                        })
                    }
                >
                    Добавить
                </button>
                <button className="catalog-pizza-card__buy" type="submit">
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default FieldArray;
