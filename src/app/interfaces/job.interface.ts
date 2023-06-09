import { Images } from '../enums/images.enum';
import { Stack } from '../enums/stack.enum';
import { IPosition } from './position.interface';

export interface IJob {
    company: string;
    positions: IPosition[];
    image: Images;
    stack: Stack[];
    city: string;
}
