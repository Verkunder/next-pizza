import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => (
    <div className="featured">
        <div className="top">
            <h1 className="title">Общий доход</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text="70%" strokeWidth={5} />
            </div>
            <p className="title">Общий объем продаж за сегодня</p>
            <p className="amount">$420</p>
            <p className="desc">
                Обработка предыдущих транзакций. Последние платежи могут не включаться.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Цель</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Прошлая неделя</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Прошлый месяц</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Featured;
