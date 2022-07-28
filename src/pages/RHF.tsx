import Head from 'next/head';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Header from '@/components/Header';
import Controllers from '@/components/RHF/Controller';
import Input, { FormValues } from '@/components/RHF/Input';
import NestedInput from '@/components/RHF/NestedInput';
import FormStates from '@/components/RHF/FormStates';

const RHF = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            FirstName: '',
        },
        mode: 'onChange',
    });
    const onSubmit = (data: FormValues) => console.log(data);
    const methods = useForm();
    const onSubmitContext = data => console.log(data);

    return (
        <div>
            <Head>
                <title>Pizza</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="delivery">
                    <div className="wrapper">
                        <div className="delivery__steps">
                            <div className="step">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Input
                                        control={control}
                                        name="FirstName"
                                        rules={{ required: true }}
                                    />
                                    <button className="catalog-pizza-card__buy" type="submit">
                                        Отправить
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="delivery__steps">
                            <div className="step">
                                <Controllers />
                            </div>
                        </div>
                        <div className="delivery__steps">
                            <div className="step">
                                <FormProvider {...methods}>
                                    <form onSubmit={methods.handleSubmit(onSubmitContext)}>
                                        <NestedInput />
                                        <button className="catalog-pizza-card__buy" type="submit">
                                            Отправить
                                        </button>
                                    </form>
                                </FormProvider>
                            </div>
                        </div>
                        <div className="delivery__steps">
                            <div className="step">
                                <FormStates />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RHF;
