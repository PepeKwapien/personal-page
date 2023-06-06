import { Component } from '@angular/core';
import { jobHistory } from 'src/app/helpers/job-collection.helper';
import { secret } from 'src/app/helpers/secret.helper';
import { IJob } from 'src/app/interfaces/job.interface';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
    public placeOfLiving: string = secret;
    public currentJob: IJob = { name: secret, position: secret, start: new Date() };

    constructor() {
        this.placeOfLiving = environment.placeOfLiving;
        this.currentJob = jobHistory[0];
    }

    public get age(): number {
        const dateNow = new Date();
        const birth = new Date(1998, 11, 19);
        const diffInMilliseconds = dateNow.getTime() - birth.getTime();
        const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));

        return diffInYears;
    }
}
