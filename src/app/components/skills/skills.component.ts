import { AfterViewInit, Component } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';
import { personalTraits, personalTraitsOrdered } from 'src/app/helpers/personal-traits.collection';
import { technicalSkillsOrdered } from 'src/app/helpers/technical-skills.collection';
import { ITechnicalSkill } from 'src/app/interfaces/technical-skill.interface';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
    public image: Images = Images.skills;
    public skills: ITechnicalSkill[] = technicalSkillsOrdered;
    public traits: string[] = personalTraitsOrdered;

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

