import Head from 'next/head';
import React from 'react';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

const IndexPage = () => (
    <div>
        <Head>
            <title>Pizza</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <Banner />
        </main>
        <Footer />
    </div>
);

export default IndexPage;