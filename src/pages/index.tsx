import Head from 'next/head';
import React from 'react';
import Header from "@/components/UI/Header";

const IndexPage = () => (
    <div>
        <Head>
            <title>Next starter pack</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
    </div>
);

export default IndexPage;
