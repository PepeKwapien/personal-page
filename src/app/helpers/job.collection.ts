import { Images } from '../enums/images.enum';
import { Stack } from '../enums/stack.enum';
import { IJob } from '../interfaces/job.interface';

export const jobHistory: IJob[] = [
    {
        company: 'Canon Ophthalmic Technologies',
        positions: [
            { name: 'Fullstack Developer & Team Lead' },
            { name: 'Fullstack Developer', start: new Date(2022, 9, 1), end: new Date(2023, 3, 1) }
        ],
        image: Images.canon,
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Breslau'
    },
    {
        company: 'Netcompany',
        positions: [{ name: 'Consultant & Software Engineer', start: new Date(2022, 3, 1), end: new Date(2022, 8, 30) }],

        image: Images.netcompany,
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Warsaw'
    },
    {
        company: 'Unit4',
        positions: [{ name: 'Software Engineer Intern', start: new Date(2021, 5, 14), end: new Date(2021, 11, 31) }],
        image: Images.unit4,
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb],
        city: 'Breslau'
    }
];
