import { Component, Input } from '@angular/core';
import { IJob } from 'src/app/interfaces/job.interface';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
    @Input() job!: IJob;

    constructor() {}
}

