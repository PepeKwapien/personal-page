import { Stack } from '../enums/stack.enum';
import { IJob } from '../interfaces/job.interface';

export const jobHistory: IJob[] = [
    {
        name: 'Canon Ophthalmic Technologies',
        position: 'Fullstack Developer & Team Lead',
        start: new Date(2022, 10, 1),
        stack: [Stack.angular, Stack.docker, Stack.dotnet, Stack.tsed, Stack.mariadb]
    }
];
