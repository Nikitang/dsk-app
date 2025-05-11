import { FC } from 'react';

import styles from './Session.module.scss';
import { NavLink } from 'react-router-dom';

interface SessionCompo {
    time: string;
    state: {
        title: string;
    };
}

const Session: FC<SessionCompo> = ({ time, state }) => {
    return (
        <NavLink to={'/seats'} state={{ ...state, time }} className={styles.session}>
            {time}
        </NavLink>
    );
};

export default Session;
