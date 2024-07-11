import { ISchedule, ISeance } from '../types/IScheduleByIdResponse';

export const sortingSchedule = (schedule: ISchedule): { greenHall: ISeance[]; redHall: ISeance[]; blueHall: ISeance[] } => {
    const redHall: ISeance[] = [];
    const greenHall: ISeance[] = [];
    const blueHall: ISeance[] = [];
    schedule.seances.map((seance) => {
        if (seance.hall.name === 'Red') {
            redHall.push(seance);
        } else if (seance.hall.name === 'Green') {
            greenHall.push(seance);
        } else if (seance.hall.name === 'Blue') {
            blueHall.push(seance);
        }
    });
    return { redHall, greenHall, blueHall };
};
