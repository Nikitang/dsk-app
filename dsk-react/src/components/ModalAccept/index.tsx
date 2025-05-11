import { FC } from 'react';

import styles from './ModalAccept.module.scss';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { GetSeatsType } from '../../utils/types';
import { BASE_URL } from '../../utils/static';

interface ModalProps {
    seat: number;
    title: string;
    time: string;
    setModal: (arg: boolean) => void;
    setStatus: (arg: boolean) => void;
    status: boolean;
}

const ModalAccept: FC<ModalProps> = ({ seat, title, time, setModal, setStatus, status }) => {
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationKey: ['changeSeat'],
        mutationFn: async (obj: { id: number; status: boolean }) => {
            const responce = await axios.patch(`${BASE_URL}/seats`, {
                id: obj.id,
                availability: obj.status,
            });

            return responce.data as GetSeatsType;
        },

        onSuccess: () => {
            setModal(false);
            setStatus(!status);
            navigate('/');
        },
    });

    return (
        <div className={styles.background}>
            <div className={styles.window}>
                <h2 className={styles.title}>Подтверждение</h2>
                <div className={styles.line}></div>
                <div className={styles.name}>Название: {title}</div>
                <div className={styles.time}>Сеанс: {time}</div>
                <div className={styles.seat}>Место: {seat}</div>
                <div className={styles.btns}>
                    <button onClick={() => setModal(false)} className={styles.reject}>
                        Отмена
                    </button>
                    <button
                        onClick={() => mutate({ id: seat, status: !status })}
                        className={styles.resolve}
                    >
                        Подтвердить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAccept;
