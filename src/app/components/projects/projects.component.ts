import { Component } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    public image: Images = Images.projects;

    constructor() {}
}

