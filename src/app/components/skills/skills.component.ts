import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    public image: Images = Images.skills;

    constructor() {}
}

