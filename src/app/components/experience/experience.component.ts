import { Component } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';
import { jobHistory } from 'src/app/helpers/job.collection';
import { IJob } from 'src/app/interfaces/job.interface';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    public image: Images = Images.experience;
    public jobs: IJob[] = jobHistory;

    constructor() {}
}

