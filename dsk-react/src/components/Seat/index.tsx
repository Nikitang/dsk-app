import { FC, useEffect, useState } from 'react';

import styles from './Seat.module.scss';
import ModalAccept from '../ModalAccept';

interface SeatProps {
    id: number;
    availability: boolean;
    state: { title: string; time: string };
}

const Seat: FC<SeatProps> = ({ id, availability, state }) => {
    const [status, setStatus] = useState<boolean>(availability);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        setStatus(availability);
    }, [availability]);

    return (
        <>
            <div
                // onClick={status ? () => setModal(true) : () => {}}
                onClick={() => setModal(true)}
                className={`${styles.seat} ${status ? styles.available : styles.unavailable}`}
            >
                {id}
            </div>
            {modal && (
                <ModalAccept
                    seat={id}
                    {...state}
                    setModal={setModal}
                    status={status}
                    setStatus={setStatus}
                />
            )}
        </>
    );
};

export default Seat;
