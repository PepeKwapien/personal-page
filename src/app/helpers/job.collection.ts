import { Stack } from '../enums/stack.enum';
import { IJob } from '../interfaces/job.interface';

export const jobHistory: IJob[] = [
    {
        name: 'Canon Ophthalmic Technologies',
        position: 'Fullstack Developer & Team Lead',
        start: new Date(2022, 4, 1),
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Wrocław'
    },
    {
        name: 'Canon Ophthalmic Technologies',
        position: 'Fullstack Developer',
        start: new Date(2022, 10, 1),
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Wrocław'
    },
    {
        name: 'Netcompany',
        position: 'Fullstack Developer',
        start: new Date(2022, 4, 1),
        end: new Date(2022, 9, 31),
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Warszawa'
    },
    {
        name: 'Unit4',
        position: 'Software Engineer Intern',
        start: new Date(2021, 6, 14),
        end: new Date(2022, 12, 31),
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Wrocław'
    }
];
