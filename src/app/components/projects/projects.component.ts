import { Component } from '@angular/core';
import { Images } from 'src/app/enums/images.enum';
import { projects } from 'src/app/helpers/projects.collection';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    public image: Images = Images.projects;
    public projects = projects;

    constructor() {}
}

