import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
    @Input() title: string = 'About me';
    @Input() subtitle: string = 'Software Engineer';
    @Input() image: Images = Images.aboutme;

    constructor() {}
}

