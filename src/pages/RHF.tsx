import Head from 'next/head';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Controllers from '@/components/RHF/Controller';
import FormStates from '@/components/RHF/FormStates';
import Input, { FormValues } from '@/components/RHF/Input';
import NestedInput from '@/components/RHF/NestedInput';

import FieldArray from '../components/RHF/FieldArray';
import Yup from '../components/RHF/Yup';

const RHF = () => {
    const step = {
        width: '45%',
        margin: '16px',
        flexDirection: 'column',
    };
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
                        <div className="delivery__steps" style={{ flexWrap: 'wrap' }}>
                            <div className="step" style={step}>
                                <h2> useController </h2>
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
                            <div className="step" style={step}>
                                <h2> Controller </h2>
                                <Controllers />
                            </div>
                            <div className="step" style={step}>
                                <h2> useFormContext </h2>
                                <FormProvider {...methods}>
                                    <form onSubmit={methods.handleSubmit(onSubmitContext)}>
                                        <NestedInput />
                                        <button className="catalog-pizza-card__buy" type="submit">
                                            Отправить
                                        </button>
                                    </form>
                                </FormProvider>
                            </div>
                            <div className="step" style={step}>
                                <h2> useFormState </h2>
                                <FormStates />
                            </div>
                            <div className="step" style={step}>
                                <h2> useFieldArray </h2>
                                <FieldArray />
                            </div>
                            <div className="step" style={step}>
                                <h2> Yup + react-hook-form </h2>
                                <Yup />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RHF;
