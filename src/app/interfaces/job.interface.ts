import { Images } from '../enums/images.enum';
import { Stack } from '../enums/stack.enum';

export interface IJob {
    name: string;
    position: string;
    //picture: Images;
    start: Date;
    end?: Date;
    stack: Stack[];
}
