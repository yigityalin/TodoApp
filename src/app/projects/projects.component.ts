import {Component} from '@angular/core';
import {Project} from "./project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  title = 'Projects';
  projects: Project[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.projects.push(new Project('Project ' + i))
    }
  }
}
