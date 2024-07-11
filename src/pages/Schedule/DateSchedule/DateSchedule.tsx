import { IPlace, ISchedule } from '../../../types/IScheduleByIdResponse';
import { sortingSchedule } from '../../../hooks/sortingSchedule';
import { HallSchedule } from './HallSchedule/HallSchedule';
import { styled } from '@mui/material';
import { Places } from './Places/Places';
import { Title } from '../../common/Title/Title';

interface IDateScheduleProps {
    schedule: ISchedule;
    seanceId: string;
    onChange: (id: string, places: [IPlace[]]) => void;
    places: [IPlace[]];
    date: string;
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const DateSchedule = ({ seanceId, schedule, onChange, places, date }: IDateScheduleProps): JSX.Element => {
    const { redHall, blueHall, greenHall } = sortingSchedule(schedule);

    return (
        <Container>
            <HallSchedule seanceId={seanceId} hall={redHall} title={'Красный зал'} onChange={onChange} date={date} />
            <HallSchedule seanceId={seanceId} hall={blueHall} title={'Синий зал'} onChange={onChange} date={date} />
            <HallSchedule seanceId={seanceId} hall={greenHall} title={'Зеленый зал'} onChange={onChange} date={date} />
            <Title text={'Выбор места'} />
            <Places places={places} />
        </Container>
    );
};
