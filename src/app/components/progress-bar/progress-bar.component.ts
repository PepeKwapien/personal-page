import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit {
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

    ngAfterViewInit() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('zero-width');
                } else {
                    entry.target.classList.add('zero-width');
                }
            });
        });

        const blurElements = document.querySelectorAll('.zero-width');
        blurElements.forEach((el) => intersectionObserver.observe(el));
    }
}

