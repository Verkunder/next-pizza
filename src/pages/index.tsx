import Head from 'next/head';
import React from 'react';
import Header from "@/components/Header/index";

const IndexPage = () => (
    <div>
        <Head>
            <title>Pizza</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
    </div>
);

export default IndexPage;
