export interface Note {
    id: number;
    title: string;
    text: string;
    date: Date;
}
export const NOTES: Note[] = [
    {
        id : 1,
        title : 'Note 1',
        text : 'This is the first note',
        date : new Date('2021-01-01')
        },
        {
        id : 2,
        title : 'Note 2',
        text : 'This is the second note',
        date : new Date('2021-01-02')
        },
        {
        id : 3,
        title : 'Note 3',
        text : 'This is the third note',
        date : new Date('2021-01-03')
    },
];