import { Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
    constructor() {}

    public get age(): number {
        const dateNow = new Date();
        const birth = new Date(1998, 11, 19);
        const diffInMilliseconds = dateNow.getTime() - birth.getTime();
        const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));

        return diffInYears;
    }
}
