import { Component, OnInit } from '@angular/core';
import {Project} from "../project/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = new Project('Project');

  constructor() { }

  ngOnInit(): void {
  }

}
