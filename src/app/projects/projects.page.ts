import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: any[] = [];
  constructor(private project_detail : ProjectsService) { }

  ngOnInit() {
      this.project_detail.getProjects().subscribe((projects: any[]) => {
        this.projects = projects;
    });
  }
}
