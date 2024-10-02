import { Component, Input } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';
import { coerceBooleanProperty } from 'src/app/helpers/boolean.helper';

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
    private _reverted: boolean = false;
    private _mirrorImage: boolean = false;

    @Input() title: string = 'About me';
    @Input() subtitle: string = 'Software Engineer';
    @Input() image: Images = Images.aboutme;
    @Input()
    get reverted() {
        return this._reverted;
    }
    set reverted(value: any) {
        this._reverted = coerceBooleanProperty(value);
    }
    @Input()
    get mirrorImage() {
        return this._mirrorImage;
    }
    set mirrorImage(value: any) {
        this._mirrorImage = coerceBooleanProperty(value);
    }

    constructor() {}
}
