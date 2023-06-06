import { Component, Input } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';
import { coerceBooleanProperty } from 'src/app/helpers/boolean.helper';

@Component({
    selector: 'app-landing[landingMessage]',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
    private _showGreeting: boolean = false;
    @Input()
    get showGreeting() {
        return this._showGreeting;
    }
    set showGreeting(value: any) {
        this._showGreeting = coerceBooleanProperty(value);
    }

    @Input() landingMessage: string = "I'm Paweł Kwapień";
    @Input() backgroundImage: Images = Images.florence;

    constructor() {}

    get greeting(): string {
        const dateNow = new Date();
        const hourNow = dateNow.getHours();
        let greeting;

        if (hourNow >= 3 && hourNow < 12) {
            greeting = 'Good morning ☕';
        } else if (hourNow >= 12 && hourNow < 19) {
            greeting = 'Good afternoon 👋';
        } else {
            greeting = 'Good evening 😴';
        }

        return greeting;
    }
}
