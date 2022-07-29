import React from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Admin/Sidebar';
import Navbar from '@/components/Admin/Navbar';
import Widget from '@/components/Admin/Widget';
import Featured from '@/components/Admin/Featured';
import Chart from '@/components/Admin/Chart';
import Table from '@/components/Admin/Table';
import Datatable from '@/components/Admin/DataTable';

const Admin = () => (
    <div>
        <Head>
            <title>Pizza</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="home">
            <Sidebar />
            <div className="home__container">
                <Navbar />
                <div className="home__widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="home__widgets-charts">
                    <Featured />
                    <Chart title="Последние 6 месяцев (доход)" aspect={2 / 1} />
                </div>
                <div className="home__widgets-listContainer">
                    <div className="home__widgets-listContainer-listTitle">
                        Последние транзакции
                    </div>
                    <Table />
                </div>
                <div className="home__widgets-listContainer">
                    <Datatable />
                </div>
            </div>
        </div>
    </div>
);

export default Admin;
