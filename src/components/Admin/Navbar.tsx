import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__wrapper-search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="navbar__wrapper-items">
                    <div className="navbar__wrapper-items-item">
                        <DarkModeOutlinedIcon className="navbar__wrapper-items-icon" />
                    </div>
                    <div className="navbar__wrapper-items-item">
                        <FullscreenExitOutlinedIcon className="navbar__wrapper-items-icon" />
                    </div>
                    <div className="navbar__wrapper-items-item">
                        <NotificationsNoneOutlinedIcon className="navbar__wrapper-items-icon" />
                        <div className="navbar__wrapper-items-counter">1</div>
                    </div>
                    <div className="navbar__wrapper-items-item">
                        <ChatBubbleOutlineOutlinedIcon className="navbar__wrapper-items-icon" />
                        <div className="navbar__wrapper-items-counter">2</div>
                    </div>
                    <div className="navbar__wrapper-items-item">
                        <ListOutlinedIcon className="navbar__wrapper-items-icon" />
                    </div>
                    <div className="navbar__wrapper-items-item">Степан Капустин</div>
                    <div className="navbar__wrapper-items-item">
                        <img
                            src="https://lh3.googleusercontent.com/ogw/AOh-ky2nmVQoY-lAX5n9HyT5wal4YK9KE-0VhmoukrGq=s32-c-mo"
                            alt=""
                            className="navbar__wrapper-items-avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
