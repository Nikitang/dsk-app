export type GetMoviesType = {
    id: number;
    title: string;
    duration: string;
    genre: string;
    updatedAt: string;
    createdAt: string;
};

export type GetSessionsType = {
    id: number;
    time: string;
    period: string;
    updatedAt: string;
    createdAt: string;
};

export type GetSeatsType = {
    id: number;
    seatNumber: number;
    availability: boolean;
    updatedAt: string;
    createdAt: string;
};
