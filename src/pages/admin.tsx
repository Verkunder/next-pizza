import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Admin/Sidebar';
import Navbar from '@/components/Admin/Navbar';

const Admin = () => {
    return (
        <div>
            <Head>
                <title>Pizza</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="home">
                <Sidebar />
                <div className="home__container">
                    <Navbar />
                    <div className="home__widgets"></div>
                    <div className="home__widgets-charts"></div>
                    <div className="home__widgets-listContainer">
                        <div className="home__widgets-listContainer-listTitle">
                            Latest Transactions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
