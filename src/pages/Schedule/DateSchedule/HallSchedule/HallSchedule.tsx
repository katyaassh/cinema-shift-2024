import { Button, styled, Typography } from '@mui/material';
import { IPlace, ISeance } from '../../../../types/IScheduleByIdResponse';
import { theme } from '../../../../theme';

interface IHallScheduleProps {
    hall: ISeance[];
    title: string;
    seanceId: string;
    onChange: (id: string, places: [IPlace[]]) => void;
    date: string;
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ButtonEntity = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
    width: 70px;
    padding: 10px 16px;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 14px;
    background-color: ${({ isActive }) => (isActive ? theme.palette.primary.contrastText : 'white')};
    color: ${({ isActive }) => (isActive ? 'white' : theme.palette.primary.main)};
`;

const Buttons = styled('div')`
    display: flex;
    gap: 8px;
`;

export const HallSchedule = ({ hall, title, seanceId, onChange, date }: IHallScheduleProps): JSX.Element => {
    return (
        <Container>
            <div>
                <Typography variant={'paragraph12'}>{title}</Typography>
                <Buttons>
                    {hall.map((seance) => {
                        return (
                            <ButtonEntity
                                isActive={seanceId === `${seance.hall.name} ${seance.time} ${date}`}
                                key={seance.time}
                                onClick={() => onChange(`${seance.hall.name} ${seance.time} ${date}`, seance.hall.places)}
                            >
                                {seance.time}
                            </ButtonEntity>
                        );
                    })}
                </Buttons>
            </div>
        </Container>
    );
};
