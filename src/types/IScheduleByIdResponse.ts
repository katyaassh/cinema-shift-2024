export interface IPlace {
    price: number;
    type: string;
}

interface IHall {
    name: string;
    places: [IPlace[]];
}

export interface ISeance {
    time: string;
    hall: IHall;
    // payedTickets: []
}

export interface ISchedule {
    date: string;
    seances: ISeance[];
}

export interface IScheduleByIdResponse {
    success?: boolean;
    schedules?: ISchedule[];
}
