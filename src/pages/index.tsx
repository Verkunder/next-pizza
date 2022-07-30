import 'aos/dist/aos.css';

import AOS from 'aos';
import Head from 'next/head';
import React, { FC, useEffect } from 'react';

import About from '@/components/About';
import Banner from '@/components/Banner';
import Index from '@/components/Basket/index';
import Catalog from '@/components/Catalog/index';
import Delivery from '@/components/Delivery';
import Footer from '@/components/Footer';
import Header from '@/components/Header/index';
import Instagram from '@/components/instagram';
import SaleSlidet from '@/components/SaleSlidet';

interface CatalogProps {
    catalog: [
        {
            id: number;
            name: string;
            description: string;
            size: number;
            price: number;
            icon: Array<string>;
            img: string;
            pizzaSize: string;
            sort: string;
        }
    ];
    load: boolean;
    errorMessage: string;
}

const IndexPage: FC<CatalogProps> = ({ catalog, load, errorMessage }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div>
            <Head>
                <title>Pizza</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Banner />
                <SaleSlidet />
                {errorMessage ? (
                    <h2 className="catalog-pizza__title">{errorMessage}</h2>
                ) : (
                    <Catalog catalog={catalog} load={load} />
                )}

                <div data-aos="fade-right">
                    <Delivery />
                </div>
                <About />
                <Instagram />
            </main>
            <Footer />
            <Index />
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        let load = true;
        const CatalogResult = await fetch('http://localhost:8080/catalog.json');
        const catalog = (await CatalogResult.json()) as CatalogProps;
        load = false;
        return { props: { catalog, load, errorMessage: '' } };
    } catch (e) {
        console.log(e);
        return {
            props: {
                catalog: [],
                load: false,
                errorMessage: 'Возникла ошибка при загрузке',
            },
        };
    }
};

export default IndexPage;
