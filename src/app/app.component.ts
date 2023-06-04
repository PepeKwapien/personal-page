import { AfterViewInit, Component } from '@angular/core';
import { counterClasses } from './helpers/counter-classes.helper';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    title = 'personal-page';

    constructor() {}

    ngAfterViewInit() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    for (const classPairs of counterClasses) {
                        console.log(entry.target.classList.contains(classPairs[0]));

                        if (entry.target.classList.contains(classPairs[0])) {
                            entry.target.classList.add(counterClasses.get(classPairs[0])!);
                        }
                    }
                } else {
                    for (const classPairs of counterClasses) {
                        entry.target.classList.remove(classPairs[1]);
                    }
                }
            });
        });

        const blurElements = document.querySelectorAll('.blur, .hide-right');
        blurElements.forEach((el) => intersectionObserver.observe(el));
    }
}

