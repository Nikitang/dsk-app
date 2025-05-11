import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainPage.module.scss';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../../utils/static';
import CardFilm from '../../components/CardFilm';
import { GetMoviesType } from '../../utils/types';
import BackBtn from '../../components/BackBtn';

const MainPage: FC = () => {
    const { data } = useQuery({
        queryKey: ['allMovies'],
        queryFn: async () => {
            const responce = await axios.get(`${BASE_URL}/movies`);

            return responce.data as Array<GetMoviesType>;
        },
    });

    return (
        <div className={styles.mainBlock}>
            <h1 className={styles.header}>Список доступных фильмов</h1>
            <div className={styles.cardBlock}>
                {data?.map((item) => (
                    <CardFilm
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        duration={item.duration}
                        genre={item.genre}
                    />
                ))}
            </div>
            <BackBtn />
        </div>
    );
};

export default MainPage;
