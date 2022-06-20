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
  selectedProject: Project | null = null;

  constructor() {
    for (let i = 1; i <= 5; i++) {
      let date = new Date();
      this.projects.push(new Project('Project ' + i, date));
    }
  }

  onSelect(project: Project): void {
    if (this.selectedProject === project) {
      this.selectedProject = null;
    } else {
      this.selectedProject = project;
    }
  }
}
