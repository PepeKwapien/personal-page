import { Images } from '../enums/images.enum';

export interface IProject {
    name: string;
    description: string;
    image: Images;
    link: string;
}
