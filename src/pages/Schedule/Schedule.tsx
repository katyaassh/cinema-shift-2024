import { Title } from '../common/Title/Title';
import { IPlace, ISchedule } from '../../types/IScheduleByIdResponse';
import { styled, Tab, TabProps, Tabs, TabsProps } from '@mui/material';
import { getDate } from '../../hooks/getDate';
import { DateSchedule } from './DateSchedule/DateSchedule';
import { TabContext, TabPanel, TabPanelProps } from '@mui/lab';
import { SyntheticEvent, useState } from 'react';
import { theme } from '../../theme';

interface IScheduleProps {
    schedules: ISchedule[];
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
const TabEntity = styled<TabProps>(Tab)`
    text-transform: none;
    padding: 10px 16px;
    border-radius: 14px;

    &.Mui-selected {
        background-color: white;
    }
`;

const TabsEntity = styled<TabsProps>(Tabs)`
    background-color: ${theme.palette.secondary.contrastText};
    border-radius: 16px;
    width: max-content;
    padding: 2px;

    .MuiTabs-indicator {
        display: none;
    }
`;

const TabPanelEntity = styled<TabPanelProps>(TabPanel)`
    padding: 0;
`;

export const Schedule = ({ schedules }: IScheduleProps): JSX.Element => {
    const [value, setValue] = useState(schedules[0].date);
    const [seanceId, setSeanceId] = useState(
        `${schedules[0].seances[0].hall.name} ${schedules[0].seances[0].time} ${schedules[0].date}`
    );
    const [places, setPlaces] = useState(schedules[0].seances[0].hall.places);

    const handleChangeDate = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const onChangeTime = (id: string, places: [IPlace[]]) => {
        setSeanceId(`${id}`);
        setPlaces(places);
    };

    return (
        <Container>
            <Title text={'Расписание'} />
            <TabContext value={value}>
                <TabsEntity onChange={handleChangeDate} value={value}>
                    {schedules.map((schedule) => {
                        return <TabEntity label={getDate(schedule.date)} key={schedule.date} value={schedule.date} />;
                    })}
                </TabsEntity>
                {schedules.map((schedule) => {
                    return (
                        <TabPanelEntity value={schedule.date} key={schedule.date}>
                            <DateSchedule
                                seanceId={seanceId}
                                schedule={schedule}
                                onChange={onChangeTime}
                                places={places}
                                date={schedule.date}
                            />
                        </TabPanelEntity>
                    );
                })}
            </TabContext>
        </Container>
    );
};
