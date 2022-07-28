import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';

import Link from 'next/link';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__top">
            <Link href="/admin">
                <span className="sidebar__top-logo">Pizza Admin</span>
            </Link>
        </div>
        <hr />
        <div className="sidebar__center">
            <ul>
                <p className="sidebar__center-title">Главная</p>
                <Link href="/admin">
                    <li>
                        <DashboardIcon className="sidebar__center-icon" />
                        <span>Статистика</span>
                    </li>
                </Link>
                <p className="sidebar__center-title">Продажи</p>
                <Link href="/users">
                    <li>
                        <PersonOutlineIcon className="sidebar__center-icon" />
                        <span>Пользователи</span>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <StoreIcon className="sidebar__center-icon" />
                        <span>Продукты</span>
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sidebar__bottom">
            <div className="sidebar__bottom-colorOption" />
            <div className="sidebar__bottom-colorOption" />
        </div>
    </div>
);

export default Sidebar;
