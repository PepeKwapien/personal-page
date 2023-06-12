import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
    private _progress = 0;
    @Input()
    get progress(): number {
        return this._progress;
    }
    set progress(value: number) {
        if (value < 0) {
            this._progress = 0;
        } else if (value > 100) {
            this._progress = 100;
        } else {
            this._progress = value;
        }
    }

    constructor() {}
}

