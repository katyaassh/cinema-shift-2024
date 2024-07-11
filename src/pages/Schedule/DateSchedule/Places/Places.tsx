import { IPlace } from '../../../../types/IScheduleByIdResponse';
import { styled, Typography, TypographyProps } from '@mui/material';
import { theme } from '../../../../theme';

interface PlacesProps {
    places: [IPlace[]];
}

const Container = styled('div')`
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PlacesEntity = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Rows = styled('div')`
    display: flex;
    gap: 24px;
    align-items: center;
`;

const Place = styled('div')`
    width: 16px;
    height: 16px;
    background-color: ${theme.palette.secondary.dark};
    border-radius: 4px;
`;

const BlockedPlace = styled('div')`
    width: 16px;
    height: 16px;
    background-color: ${theme.palette.secondary.light};
    border-radius: 4px;
`;

const Screen = styled('div')`
    width: 100%;
    height: 4px;
    background-color: ${theme.palette.secondary.light};
    border-radius: 16px;
`;

const ScreenBlock = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
`;

const RowNumber = styled(Typography)<TypographyProps>`
    width: 13px;
`;

export const Places = ({ places }: PlacesProps) => {
    return (
        <Container>
            {places.length ? (
                <div>
                    <ScreenBlock>
                        <Typography variant={'paragraph12'} align={'center'}>
                            Экран
                        </Typography>
                        <Screen />
                    </ScreenBlock>
                    <Typography variant={'paragraph12'}>Ряд</Typography>
                </div>
            ) : null}
            <PlacesEntity>
                {places.map((placeRows, index) => (
                    <Rows key={index}>
                        <RowNumber variant={'paragraph14'}>{index + 1}</RowNumber>
                        {placeRows.map((place, index) =>
                            place.type !== 'BLOCKED' ? <Place key={index} /> : <BlockedPlace key={index} />
                        )}
                    </Rows>
                ))}
            </PlacesEntity>
        </Container>
    );
};
