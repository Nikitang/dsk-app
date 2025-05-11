import { FC } from 'react';

import classes from './StartPage.module.scss';
import { NavLink } from 'react-router-dom';

const StartPage: FC = () => {
    return (
        <div className={classes.startBlock}>
            <NavLink to={'/main'} className={classes.btn}>
                Начать бронирование
            </NavLink>
        </div>
    );
};

export default StartPage;
