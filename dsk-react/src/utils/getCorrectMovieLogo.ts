import comedy from '../assets/img/comedy.png';
import action from '../assets/img/action-movie.png';
import dramm from '../assets/img/mask.png';
import fantasy from '../assets/img/fantasy.png';

export const getCorrectMovieLogo = (data: string): string => {
    if (data.includes('Комед')) {
        return comedy;
    } else if (data.includes('Боев')) {
        return action;
    } else if (data.includes('Фант')) return fantasy;

    return dramm;
};
