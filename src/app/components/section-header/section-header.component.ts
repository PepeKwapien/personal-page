import { Component, Input } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';

@Component({
    selector: 'app-section-header[sectionHeaderMessage]',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
    @Input() sectionHeaderMessage: string = "Hello, I'm Paweł Kwapień";
    @Input() backgroundImage: Images = Images.florence;

    constructor() {}
}

