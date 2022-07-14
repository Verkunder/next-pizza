import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const contact = () => (
    <>
        <Head>
            <title>Pizza</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="wrapper">
            <Link href="/">
                <h2 className="catalog-pizza__title">
                    <div className="navigation__link">
                        <a>Home</a>
                    </div>
                </h2>
            </Link>
        </div>
    </>
);

export default contact;
