import { Component } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    public image: Images = Images.experience;

    constructor() {}
}

