import { FC } from 'react';

import styles from './BackBtn.module.scss';
import { useNavigate } from 'react-router-dom';

const BackBtn: FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div onClick={goBack} className={styles.back}>
            <div>Назад</div>
        </div>
    );
};

export default BackBtn;
