import { Component } from '@angular/core';
import { socials } from 'src/app/helpers/socials.collection';
import { ISocial } from 'src/app/interfaces/social.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public socials: ISocial[] = socials;

    constructor() {}
}

