import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { getCorrectPeriod } from '../../utils/getCorrectPeriod';
import axios from 'axios';
import { BASE_URL } from '../../utils/static';
import { GetSessionsType } from '../../utils/types';
import Session from '../../components/Session';
import styles from './SessionPage.module.scss';
import BackBtn from '../../components/BackBtn';

const SessionPage: FC = () => {
    const location = useLocation();

    const { data } = useQuery({
        queryKey: ['session'],
        queryFn: async () => {
            const responce = await axios.get(`${BASE_URL}/sessions`);

            return responce.data as Array<GetSessionsType>;
        },
    });

    return (
        <div className={styles.sessionBlock}>
            <h1 className={styles.header}>Доступные сеансы</h1>
            <div>
                <h2 className={styles.period}>Дневные</h2>
                <div className={styles.session}>
                    {data &&
                        getCorrectPeriod(data, 'day').map((item) => (
                            <Session key={item.id} time={item.time} state={location.state} />
                        ))}
                </div>

                <h2 className={styles.period}>Ночные</h2>
                <div className={styles.session}>
                    {data &&
                        getCorrectPeriod(data, 'night').map((item) => (
                            <Session key={item.id} time={item.time} state={location.state} />
                        ))}
                </div>
            </div>
            <BackBtn />
        </div>
    );
};

export default SessionPage;
