const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'отк', 'ноя', 'дек'];

export const getDate = (date: string) => {
    const fullDate = new Date(date[3] + date[4] + date[2] + date[0] + date[1] + date[5] + date[6] + date[7]);

    return `${days[fullDate.getDay()]},` + ' ' + fullDate.getDate() + ' ' + `${months[fullDate.getMonth()]}`;
};
