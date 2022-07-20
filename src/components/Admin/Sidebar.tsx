import React, { useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Link from 'next/link';
const Sidebar = () => {
    return (
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
                    <li>
                        <DashboardIcon className="sidebar__center-icon" />
                        <span>Статистика</span>
                    </li>
                    <p className="sidebar__center-title">Продажи</p>
                    <Link href="/users">
                        <li>
                            <PersonOutlineIcon className="sidebar__center-icon" />
                            <span>Пользователи</span>
                        </li>
                    </Link>
                    <Link href="/products">
                        <li>
                            <StoreIcon className="sidebar__center-icon" />
                            <span>Продукты</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="sidebar__center-icon" />
                        <span>Заказы</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="sidebar__center-icon" />
                        <span>Доставка</span>
                    </li>
                    <p className="sidebar__center-title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="sidebar__center-icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="sidebar__center-icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="sidebar__center-title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="sidebar__center-icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="sidebar__center-icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="sidebar__center-icon" />
                        <span>Settings</span>
                    </li>
                    <p className="sidebar__center-title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="sidebar__center-icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="sidebar__center-icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottom-colorOption"></div>
                <div className="sidebar__bottom-colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;
