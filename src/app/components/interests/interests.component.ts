import { Component } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';
import { interests } from 'src/app/helpers/interests.collection';
import { IInterest } from 'src/app/interfaces/interest.interface';

@Component({
    selector: 'app-interests',
    templateUrl: './interests.component.html',
    styleUrls: ['./interests.component.scss']
})
export class InterestsComponent {
    public image: Images = Images.interests;
    public interests: IInterest[] = interests;

    constructor() {}
}

