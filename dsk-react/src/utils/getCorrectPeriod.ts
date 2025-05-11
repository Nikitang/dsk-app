import { GetSessionsType } from './types';

export const getCorrectPeriod = (
    data: Array<GetSessionsType>,
    period: string,
): Array<GetSessionsType> =>
    period === 'day'
        ? data.filter((item) => item.period === 'day')
        : data.filter((item) => item.period === 'night');
