import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { BASE_URL } from '../../utils/static';
import { GetSeatsType } from '../../utils/types';
import Seat from '../../components/Seat';
import styles from './SeatsPage.module.scss';
import { useLocation } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';

const SeatsPage: FC = () => {
    const location = useLocation();
    const { data } = useQuery({
        queryKey: ['seats'],
        queryFn: async () => {
            const responce = await axios.get(`${BASE_URL}/seats`);

            return responce.data as Array<GetSeatsType>;
        },
    });

    return (
        <div className={styles.seatBlock}>
            <h1 className={styles.header}>Выбор мест</h1>
            <div className={styles.seats}>
                {data?.map((item) => (
                    <Seat
                        key={item.id}
                        id={item.id}
                        availability={item.availability}
                        state={location.state}
                    />
                ))}
            </div>
            <BackBtn />
        </div>
    );
};

export default SeatsPage;
