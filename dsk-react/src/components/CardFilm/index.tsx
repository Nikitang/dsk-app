import React, { FC } from 'react';

import styles from './CardFilm.module.scss';
import { getCorrectMovieLogo } from '../../utils/getCorrectMovieLogo';
import { NavLink } from 'react-router-dom';

interface CardProps {
    id: number;
    title: string;
    duration: string;
    genre: string;
}

const CardFilm: FC<CardProps> = ({ id, title, duration, genre }) => {
    return (
        <NavLink state={{ title }} to={`/sessions`} className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.img} src={getCorrectMovieLogo(genre)} alt="" />
            <div className={styles.infoPopup}>
                <p>{genre}</p>
                <p>{duration}</p>
            </div>
        </NavLink>
    );
};

export default CardFilm;
