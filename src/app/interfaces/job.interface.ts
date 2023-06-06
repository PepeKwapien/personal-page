import { Images } from '../enums/images.enum';

export interface IJob {
    name: string;
    position: string;
    //picture: Images;
    start: Date;
    end?: Date;
}
