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
                    for (const classPair of counterClasses) {
                        if (entry.target.classList.contains(classPair[0])) {
                            entry.target.classList.add(counterClasses.get(classPair[0])!);
                        }
                    }
                } else {
                    for (const classPair of counterClasses) {
                        entry.target.classList.remove(classPair[1]);
                    }
                }
            });
        });

        const classesToQuery: string[] = [];
        for (const classPair of counterClasses) {
            classesToQuery.push(`.${classPair[0]}`);
        }
        const blurElements = document.querySelectorAll(classesToQuery.join(', '));
        blurElements.forEach((el) => intersectionObserver.observe(el));
    }
}

